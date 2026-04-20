@app.post("/predict")
def predict(data: dict):

    df = pd.DataFrame([{
        "median_income": data["MedInc"],
        "housing_median_age": data["HouseAge"],
        "total_rooms": data["AveRooms"],
        "total_bedrooms": data["AveBedrms"],
        "population": data["Population"],
        "households": data["AveOccup"],
        "latitude": data["Latitude"],
        "longitude": data["Longitude"],
        "ocean_proximity": "INLAND"
    }])

    transformed = pipeline.transform(df)
    prediction = model.predict(transformed)[0]

    return {"predicted_price": round(float(prediction), 2)}
