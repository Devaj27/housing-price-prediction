from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("model.pkl")
pipeline = joblib.load("pipeline.pkl")


@app.get("/")
def home():
    return {"message": "House Price Prediction API Running"}


@app.post("/predict")
def predict(data: dict):

    df = pd.DataFrame([{
        "median_income": float(data["MedInc"]),
        "housing_median_age": float(data["HouseAge"]),
        "total_rooms": float(data["AveRooms"]),
        "total_bedrooms": float(data["AveBedrms"]),
        "population": float(data["Population"]),
        "households": float(data["AveOccup"]),
        "latitude": float(data["Latitude"]),
        "longitude": float(data["Longitude"]),
        "ocean_proximity": "INLAND"
    }])

    transformed = pipeline.transform(df)
    prediction = model.predict(transformed)[0]

    return {
        "predicted_price": round(float(prediction), 2)
    }
