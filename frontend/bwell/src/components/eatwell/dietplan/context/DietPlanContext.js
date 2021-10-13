import { createContext, useState } from "react";

export const DietPlanContext = createContext();

import React from 'react'

const DietPlanContextProvider = (props) => {
    const [demand, setDemand] = useState({
        calories: 2000,
        proteinsPercentage: 30,
        fatsPercentage: 25,
        carbsPercentage: 45,
    })

    const [breakfast, setBreakfast] = useState({});
    const [lunch, setLunch] = useState({
        id: 1,
        title: 'jajecznica',
        ingredients: [
            {
                "id": 10219,"ingredient": "ground pork",
                "quantity": "300",
                "measure": "ounce",
                "possibleMeasures": [
                  "g",
                  "ounce",
                  "oz",
                  "cup",
                  "serving"
                ]
              },
              {
                "id": 11215,
                "ingredient": "garlic",
                "quantity": "2",
                "measure": "unit",
                "possibleMeasures": [
                  "clove",
                  "head",
                  "piece",
                  "g",
                  "oz",
                  "teaspoon",
                  "cup",
                  "serving",
                  "tablespoon"
                ]
              },
              {
                "id": 20420,
                "ingredient": "Pasta",
                "quantity": "400",
                "measure": "g",
                "possibleMeasures": [
                  "square",
                  "package",
                  "piece",
                  "g",
                  "bag",
                  "ounce",
                  "box",
                  "sheet",
                  "nest",
                  "oz",
                  "cup",
                  "serving"
                ]
              }
        ],
        "nutrition": {
            "nutrients": [
              {
                "title": "Carbohydrates",
                "amount": 0.0,
                "unit": "g"
              },
              {
                "title": "Protein",
                "amount": 21.23,
                "unit": "g"
              },
              {
                "title": "Calories",
                "amount": 114.0,
                "unit": "kcal"
              },
              {
                "title": "Fat",
                "amount": 2.59,
                "unit": "g"
              }
            ]
          }, 
    })
    const [dinner, setDinner] = useState({})
    const [supper, setSupper] = useState({})

    return (
        <DietPlanContext.Provider value={{}}>
            {props.children}
        </DietPlanContext.Provider>
    )
}

export default DietPlanContextProvider
