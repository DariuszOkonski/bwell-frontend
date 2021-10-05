import React, { createContext, useState } from 'react';
import { v4 } from 'uuid';



export const EntryCreatorContext = createContext();

const EntryCreatorContextProvider = (props) => {
  const [title, setTitle] = useState("")
  const [module, setModule] = useState("fitWell")
  const [textAreas, setTextAreas] = useState([
    {id: v4(), header: '', text: ''},
    {id: v4(), header: '', text: ''},
  ])

  const [listsContent, setListContent] = useState({
    ingredientsList: [
        // {id: uuidv4(), ingredient: "", quantity: 0, measure: ""}
    ],
    customLists: [

    ]
})


  const addTextArea = (id, header, text) => {
    const localTextArea = [...textAreas, {id, header, text}];
    setTextAreas(localTextArea);
  }

  const removeTextArea = (id) => {
    setTextAreas(textAreas.filter(item => item.id !== id));
  }

  const editTextArea = (newItem) => {
    const localTextAreas = [...textAreas];
    const newLocalTextAreas = localTextAreas.map(item => {
      if(item.id === newItem.id) {
        return newItem;
      }
      return item
    });

    setTextAreas(newLocalTextAreas);
  }

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
        textAreas,
        customLists: listsContent.customLists, 
        ingredients: listsContent.ingredientsList,
        setTitle,
        setModule,
        addIngredient,
        removeIngredient,
        editIngredient,
        editTextArea,
        removeTextArea,
        addTextArea
      }}>
      {props.children}
    </EntryCreatorContext.Provider>
  );
}
 
export default EntryCreatorContextProvider;