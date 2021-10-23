import React, { createContext, useState, useEffect } from "react";

export const DietPlanContext = createContext();

const DietPlanContextProvider = (props) => {
    const [demand, setDemand] = useState({
        calories: 2000,
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
        selectedMeal,  setSelectedMeal,
          meals, setMeals,  settersGenerator,
          demand } }>
            {props.children}
        </DietPlanContext.Provider>
    )
}

export default DietPlanContextProvider
