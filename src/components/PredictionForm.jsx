@app.post("/predict")
def predict(data: dict):
    try:
        row = {
            "longitude": float(data["Longitude"]),
            "latitude": float(data["Latitude"]),
            "housing_median_age": float(data["HouseAge"]),
            "total_rooms": float(data["AveRooms"]),
            "total_bedrooms": float(data["AveBedrms"]),
            "population": float(data["Population"]),
            "households": float(data["AveOccup"]),
            "median_income": float(data["MedInc"]),
            "ocean_proximity": "INLAND"
        }

        df = pd.DataFrame([row])
        transformed = pipeline.transform(df)
        prediction = model.predict(transformed)[0]

        return {"predicted_price": round(float(prediction), 2)}

    except Exception as e:
        return {"error": str(e)}
