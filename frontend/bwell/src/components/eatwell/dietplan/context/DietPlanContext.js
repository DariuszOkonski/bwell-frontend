import { createContext, useEffect, useState } from "react";
import React from 'react'
import { eatWell } from "../../../../utilities/BackendRequests";
import { contentTypes } from "../../../../utilities/utilities";

export const DietPlanContext = createContext();

const DietPlanContextProvider = (props) => {
    const [demand, setDemand] = useState({
        calories: 2000,
        proteinsPercentage: 30,
        fatsPercentage: 25,
        carbsPercentage: 45,
    })

    const [selectedMealIngredients, setSelectedMealIngredients] = useState([]);
    
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
    const [meals, setMeals] = useState({breakfast: {}, lunch: {}, dinner: {}, supper: {}})
    
    function* settersGenerator() {
      yield setBreakfast;
      yield setLunch;
      yield setDinner;
      yield setSupper;
    }

    useEffect(() => {
      setMeals({breakfast, lunch, dinner, supper})
    }, [breakfast, lunch, dinner, supper])

    return (
        <DietPlanContext.Provider value = { { 
          breakfast, setBreakfast,
          lunch, setLunch, 
          dinner, setDinner,
          supper, setSupper,
           selectedMealIngredients,  setSelectedMealIngredients,
          meals, setMeals,  settersGenerator,
          demand } }>
            {props.children}
        </DietPlanContext.Provider>
    )
}

export default DietPlanContextProvider
