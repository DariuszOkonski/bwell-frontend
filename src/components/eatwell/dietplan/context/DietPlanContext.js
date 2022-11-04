import React, { createContext, useState, useEffect } from "react";
import { eatWell } from "../../../../utilities/BackendRequests";

export const DietPlanContext = createContext();

const DietPlanContextProvider = (props) => {
    const [demand, setDemand] = useState({
        calories: 2000,
        proteinsPercentage: 30,
        fatsPercentage: 25,
        carbsPercentage: 45,
    })

    const [income, setIncome] = useState({
      calories: 2223,
      proteinsPercentage: 30,
      fatsPercentage: 25,
      carbsPercentage: 45,
    })
    

    const [selectedMeal, setSelectedMeal] = useState({});
    
    const [breakfast, setBreakfast] = useState({});
    const [lunch, setLunch] = useState({})
    const [dinner, setDinner] = useState({})
    const [supper, setSupper] = useState({})
    const [meals, setMeals] = useState({breakfast: {}, lunch: {}, dinner: {}, supper: {}})
    
    function* settersGenerator() {
      yield setBreakfast;
      yield setLunch;
      yield setDinner;
      yield setSupper;
      yield updateMealsSummary
    }

    useEffect(() => {
      
      setMeals({breakfast, lunch, dinner, supper})
    }, [breakfast, lunch, dinner, supper])
    const updateMealsSummary = async () => {
      const asd = Object.values(meals).filter(meal => meal != null && meal != undefined && meal != {})

      const sumNutritions = await eatWell.fetchSumRecipesNutrition()
      const coverage = await eatWell.fetchCoverageOfNutrients()
      const {calories: caloriesDemand ,  fat:fatDemand, carbohydrates: carbohydratesDemand, protein: proteinDemand} = {...sumNutritions}
      Object.keys(coverage)
        .forEach((key, index, array) =>{
          coverage[`${key}Percentage`] = coverage[key]
          delete coverage[key]
      })
      
      setIncome({caloriesDemand: caloriesDemand.amount, fatDemand: fatDemand.amount, carbohydratesDemand: carbohydratesDemand.amount, proteinDemand: proteinDemand.amount, ...coverage})
    }
    
    return (
        <DietPlanContext.Provider value = { { 
          breakfast, setBreakfast,
          lunch, setLunch, 
          dinner, setDinner,
          supper, setSupper,
        selectedMeal,  setSelectedMeal,
          meals, setMeals,  settersGenerator,
          demand, setDemand,
          income, setIncome} }>
            {props.children}
        </DietPlanContext.Provider>
    )
}

export default DietPlanContextProvider
