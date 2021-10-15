import { createContext, useState } from "react";
import React from 'react'

export const DietPlanContext = createContext();

const DietPlanContextProvider = (props) => {
    const [demand, setDemand] = useState({
        calories: 2000,
        proteinsPercentage: 30,
        fatsPercentage: 25,
        carbsPercentage: 45,
    })

    
    const [breakfast, setBreakfast] = useState({});
    const [lunch, setLunch] = useState({})
    const [dinner, setDinner] = useState({})
    const [supper, setSupper] = useState({})
   
    return (
        <DietPlanContext.Provider value = { 
          { 
            breakfast, setBreakfast, 
            demand, setDemand,
            lunch, setLunch, 
            dinner, setDinner,
            supper, setSupper 
            } }>
            {props.children}
        </DietPlanContext.Provider>
    )
}

export default DietPlanContextProvider
