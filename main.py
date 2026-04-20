from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib

app = FastAPI()

# Allow frontend requests
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
    df = pd.DataFrame([data])
    transformed = pipeline.transform(df)
    prediction = model.predict(transformed)[0]

    return {
        "predicted_price": round(float(prediction), 2)
    }
