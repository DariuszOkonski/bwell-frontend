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

    
    const [breakfast, setBreakfast] = useState({});
    const [lunch, setLunch] = useState({
        id: 1,
        title: 'Scrumbled Eggs',
    })
    const [dinner, setDinner] = useState({
      id: 1,
      title: 'Dumblings',
  })
    const [supper, setSupper] = useState({
      id: 1,
      title: 'Ham & Cheese',
  })
   
    return (
        <DietPlanContext.Provider value = { { breakfast, setBreakfast, demand, lunch, dinner, supper } }>
            {props.children}
        </DietPlanContext.Provider>
    )
}

export default DietPlanContextProvider
