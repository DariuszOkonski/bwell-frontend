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

const MAX_INGREDIENTS_LISTS_COUNT = 3
const MAX_CUSTOM_LISTS_COUNT = 2
const MAX_CUSTOM_LIST_ROWS_COUNT = 8
const MAX_TEXT_AREAS_COUNT = 3

export const EntryCreatorContext = createContext();

const EntryCreatorContextProvider = (props) => {

    const {path} = useRouteMatch();
    const [module, setModule] = useState(path.split("/")[1])
    useEffect(() => {
        setModule(path.split("/")[1])
    }, [path])

    const [title, setTitle] = useState("")

    const [textAreas, setTextAreas] = useState([
        // { id: 0, "header": "Description", "type": "text_area", "text":"" }
    ])
    const [ingredientsLists, setIngredientsLists] = useState([
        // { id:0, header: "", ingredients: [], order: 0, type: contentTypes.ingredients_list}
    ])
    const [customLists, setCustomLists] = useState([
        // { id, header, content, order}
    ])

    const nextOrder = () => textAreas.length + ingredientsLists.length + customLists.length




    // Text areas

    const addTextArea = (id, header, text) => {
        if (textAreas.length < MAX_TEXT_AREAS_COUNT){
            const emptyTextArea = {
                id,
                header,
                text,
                order: nextOrder(),
                type: contentTypes.textArea
            }
            const localTextArea = [...textAreas, emptyTextArea];
            setTextAreas(localTextArea);
        }
    }

    const removeTextArea = (id) => {
        setTextAreas(textAreas.filter(item => item.id !== id));
    }

    const editTextArea = (newItem) => {
        const localTextAreas = [...textAreas];
        const newLocalTextAreas = localTextAreas.map(item => item.id === newItem.id ? {...item, ...newItem} : item);
        setTextAreas(newLocalTextAreas);
    }



    // Ingredients lists

    const addIngredientsList = (id) => {
        if (ingredientsLists.length < MAX_INGREDIENTS_LISTS_COUNT){
            const emptyIngredientList = {
                id,
                header: "",
                ingredients: [
                    {
                    id: v4(),
                    ingredient: "",
                    quantity: 0,
                    measure: {id: 0, name:"g"},
                    possibleMeasures: [{id: 3, name:"g"},
                                       {id: 1, name:"ounce"},
                                       {id: 2, name:"lbs"},
                                       {id: 0, name:"ml"},]
                    }
                ],
                order: nextOrder(),
                type: contentTypes.ingredientsList
            }
            setIngredientsLists([...ingredientsLists, emptyIngredientList])
    }
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


    // single ingredient

    const addIngredient = (id, ingredient, quantity, measure, listId) => {
        const emptyIngredient = {
            id,
            ingredient,
            quantity,
            measure,
            possibleMeasures: ["unit",
                                "kg",
                                "g",
                                "stone"]
        }
        const updatedLists = ingredientsLists.map(list => {
            if (list.id === listId) {
                const localState = list.ingredients
                list.ingredients = [...localState, emptyIngredient]
            }
            return list
        });
        setIngredientsLists(updatedLists)
    };

    
    const editIngredient = (newItem, listId, newId=null) => {
        const updatedLists = ingredientsLists.map(list => {
            if (list.id === listId) {
                const localIngredients = list.ingredients.map(ingredient => {
                    if (ingredient.id === newItem.id){
                        if (newId) {
                            newItem.id = newId;
                        }
                        return newItem
                    }  return ingredient
                })
                list.ingredients = localIngredients;
            }
            return list
        });
        setIngredientsLists(updatedLists)
        console.log("updated ingredients lists => ", ingredientsLists)
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


    
    // Custom lists

    const addCustomList = (id) => {
        if (customLists.length < MAX_CUSTOM_LISTS_COUNT){
            const newCustomList = {
                id,
                header: "",
                content: [{
                    id: v4(),
                    order: 0,                
                    cells: [{id: v4(), order: 0, value: ""}]
                }],
                order: nextOrder(),
                type: contentTypes.customList
            }
            setCustomLists([...customLists, newCustomList])
    }
    }
    
    const editCustomListTitle = (newTitle, id) => {
        const updatedList = customLists.find(list => list.id === id);

        updatedList.header = newTitle;
       setCustomLists(customLists.map(list => list.id === id ? updatedList : list))
    }

    const removeCustomList = (listId) => {
        const local = customLists.filter(list => list.id !== listId)
        local.sort((list1, list2) => list1.order - list2.order)
        setCustomLists(local)
    }

    const getCustomList = (id) => {
        return {...customLists.find(list => list.id === id)};
    }


    // custom list item

    const addCustomListItem = (id, listId) => {
        const customListRowsCount = getCustomList(listId).content.length
        if (customListRowsCount < MAX_CUSTOM_LIST_ROWS_COUNT){
            const emptyItem = {
                id,
                order: customListRowsCount,
                cells: [{id: v4(), order: 0, value: ""}] 
            }

            const updatedLists = customLists.map(list => {
                if (list.id === listId) {
                    const localState = list.content
                    list.content = [...localState, emptyItem]
                }
                return list
            });
            updatedLists.sort((list1, list2) => list1.order - list2.order)

            setCustomLists(updatedLists);
        }

    }
    
    const editCustomItem = (newItem, listId) => {
        const listWithGivenRow = getCustomList(listId)

        const updatedList = listWithGivenRow.content.map(row => {
            if (row.id === newItem.id) {
                return newItem    
            }
            return row
        });
        listWithGivenRow.content = updatedList
        const local = [...customLists.filter(list => list.id !== listId), listWithGivenRow]
        local.sort((list1, list2) => list1.order - list2.order)

        setCustomLists(local)
    }

    const removeCustomItem = (itemId, listId) => {
        const listWithGivenRow = getCustomList(listId)
        const updatedContent = listWithGivenRow.content.filter(row => row.id !== itemId)
        updatedContent.sort((row1, row2) => row1.order - row2.order)
        listWithGivenRow.content = updatedContent
        setCustomLists(customLists.map(list => list.id === listId ? listWithGivenRow : list))
        
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
                editCustomItem,
                editCustomListTitle,
                removeCustomItem,
                removeCustomList,
                getCustomList
            }}> {
            props.children
        } </EntryCreatorContext.Provider>
    );
}

export default EntryCreatorContextProvider;