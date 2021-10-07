import React, {
    createContext,
    useEffect,
    useState
} from 'react';
import { useRouteMatch } from 'react-router';
import {
    v4
} from 'uuid';
import { contentTypes } from '../../../utilities/utilities';

import { useHistory } from 'react-router-dom';

export const EntryCreatorContext = createContext();

const EntryCreatorContextProvider = (props) => {
    const {path} = useRouteMatch();

    const [title, setTitle] = useState("")
    const [module, setModule] = useState(path.split("/")[1])
    const [textAreas, setTextAreas] = useState([])
    const [ingredientsLists, setIngredientsLists] = useState([
        // {id:0, header: "", ingredients: [], order: 0, type: contentTypes.ingredients_list}
    ])
    const [customLists, setCustomLists] = useState([
        // {id, header, content, order}
    ])

    useEffect(() => {
        setModule(path.split("/")[1])
    }, [path])

    const nextOrder = () => textAreas.length + ingredientsLists.length

    const addTextArea = (id, header, text) => {
        const localTextArea = [...textAreas, {
            id,
            header,
            text,
            order: nextOrder(),
            type: contentTypes.textArea
        }];
        setTextAreas(localTextArea);
    }

    const removeTextArea = (id) => {
        setTextAreas(textAreas.filter(item => item.id !== id));
    }

    const editTextArea = (newItem) => {
        const localTextAreas = [...textAreas];
        const newLocalTextAreas = localTextAreas.map(item => item.id === newItem.id ? {...item, ...newItem} : item);
        setTextAreas(newLocalTextAreas);
    }


    const addIngredientsList = (id) => {

        setIngredientsLists([...ingredientsLists, {
            id,
            header: "",
            ingredients: [{
                id: v4(),
                ingredient: "",
                quantity: 0,
                measure: "g"
            }],
            order: nextOrder(),
            type: contentTypes.ingredientsList
        }])
    }

    const addCustomList = (id) => {
        setCustomLists([...customLists, {
            id,
            header: "",
            content: [{
                id: v4(),
                order: 0,                
                value: ""
            }],
            order: nextOrder(),
            type: contentTypes.customList
        }])
    }

    const removeIngredientsList = (id) => {
        const localIngredinetsList = [...ingredientsLists];

        setIngredientsLists(localIngredinetsList.filter(list => list.id !== id))
    }

    const editIngredientsListTitle = (newTitle, listId) => {
        const updatedIngredientsList = ingredientsLists.map(item => {
            if (item.id === listId) {
                item.header = newTitle
            }
            return item
        });
        setIngredientsLists(updatedIngredientsList);
    }


    const addIngredient = (id, ingredient, quantity, measure, listId) => {
        const localIngredient = {
            id,
            ingredient,
            quantity,
            measure
        }
        const updatedLists = ingredientsLists.map(list => {
            if (list.id === listId) {
                const localState = list.ingredients
                list.ingredients = [...localState, localIngredient]
            }
            return list
        });
        setIngredientsLists(updatedLists)
    };

    const addCustomListItem = (id, listId) => {
        const localItem = {
            id,
            order: customLists.filter(list => list.id === listId)[0].length,
            value: "" 
        }

        const updatedLists = customLists.map(list => {
            if (list.id === listId) {
                const localState = list.content
                list.content = [...localState, localItem]
            }
            return list
        });

        setCustomLists(updatedLists);
    }

    const removeIngredient = (id, listId) => {
        const updatedLists = ingredientsLists.map(list => {
            if (list.id === listId) {
                list.ingredients = list.ingredients.filter(ingredient => ingredient.id !== id)
            }
            return list
        });
        setIngredientsLists(updatedLists)
    }

    const editIngredient = (newItem, listId) => {
        const updatedLists = ingredientsLists.map(list => {
            if (list.id === listId) {
                const localIngredients = list.ingredients.map(ingredient => ingredient.id === newItem.id ? newItem : ingredient)
                list.ingredients = localIngredients;
            }
            return list
        });
        setIngredientsLists(updatedLists)
    }

    const removeCustomCell = (id, listId, itemId) => {

    }

    const removeCustomItem = (id, listId) => {

    }

    return ( <EntryCreatorContext.Provider value = {
            {
                title,
                module,
                textAreas,
                ingredientsLists,
                customLists,
                setTitle,
                setModule,
                addIngredient,
                removeIngredient,
                editIngredient,
                addTextArea,
                editTextArea,
                removeTextArea,
                addIngredientsList,
                editIngredientsListTitle,
                removeIngredientsList,
                addCustomList,
                addCustomListItem,
                removeCustomCell,
                removeCustomItem
            }}> {
            props.children
        } </EntryCreatorContext.Provider>
    );
}

export default EntryCreatorContextProvider;