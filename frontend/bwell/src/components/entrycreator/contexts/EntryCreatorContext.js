import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const EntryCreatorContext = createContext();

const EntryCreatorContextProvider = (props) => {
  const [title, setTitle] = useState("")
  const [module, setModule] = useState("fitWell")

  const [listsContent, setListContent] = useState({
    ingredientsList: [
        // {id: uuidv4(), ingredient: "", quantity: 0, measure: ""}
    ],
    customLists: [

    ]
})



  const addIngredient = (id, ingredient, quantity, measure) => {
    const localIngredient = {id, ingredient, quantity, measure}
    const ingredientsList = [...listsContent.ingredientsList, localIngredient]

    setListContent({...listsContent, ingredientsList});
  };
  const removeIngredient = (id) => {
    const ingredientsList = listsContent.ingredientsList.filter(ingredient => ingredient.id !== id)
    setListContent({...listsContent, ingredientsList});
  }

  const editIngredient = (newItem) => {
    const localIngredients = [...listsContent.ingredientsList];
    const newLocalIngredients = localIngredients.map(item => {
        if(item.id === newItem.id) {
            return newItem
        }
        return item
    })
    setListContent({...listsContent, ingredientsList: newLocalIngredients});
}


  return (
    <EntryCreatorContext.Provider value={{
        title,
        module,
        customLists: listsContent.customLists, 
        ingredients: listsContent.ingredientsList,
        setTitle,
        setModule,
        addIngredient,
        removeIngredient,
        editIngredient  }}>
      {props.children}
    </EntryCreatorContext.Provider>
  );
}
 
export default EntryCreatorContextProvider;