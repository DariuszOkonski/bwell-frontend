import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';
import { IngredientsHintsFetcher } from '../../eatwell/apiSpoonacular/IngredientHintsFetcher';

const IngredientItem = (props) => {
    const useStyles = makeStyles({
        container: {
            margin: '0.5rem 0',
            display: 'flex',
            justifyContent: 'space-between'
        },
        item: {
            width:"50%",
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            padding: "0.1rem",
            color: `${colors.textPrimary}`,
        },
        unit: {
            width: '20%'
        },
        count: {
            width: "20%"
        },
        buttonDelete: {
            backgroundColor: colors.thumbDown,
            border: 'none',
            borderRadius: "0.4rem",
            color: `${colors.white}`,
            cursor: 'pointer'
        },
        hints: {
            backgroundColor: colors.thumbUp
        },
        hint: {
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            padding: "0.2rem",
            backgroundColor: colors.white,
            color: `${colors.textPrimary}`,
            zIndex: "5"
        }
    })
    const classes = useStyles();
    const fetcher = new IngredientsHintsFetcher()
    
    const { removeIngredient, editIngredient } = useContext(EntryCreatorContext)
    
    const [id, setId] = useState(props.id)
    const [nextInput, setNextInput] = useState({next: "ingredient", previous: ""})
    const [ingredient, setIngredient] = useState(props.ingredient);
    const [amount, setAmount] = useState(props.amount);
    const [unit, setUnit] = useState(props.unit)    
    const [possibleUnits, setPossibleUnits] = useState(props.possibleUnits)
    
    const [isSubmit, setIsSubmit] = useState(false)
    
    const [hints, setHints] = useState({
        "results": [],
        "isShowing": false
    })

    const handleDeleteItem = () => {
        removeIngredient(props.id, props.listId)
    }    

    const handleChangeIngredient = (evt) => {
        console.log(props)
        setIngredient(evt.target.value)
    }

    const handleChangeQuantity = (evt) => {
        setAmount(evt.target.value)
    }

    const handleChangeMeasure = (evt) => {
        setUnit(evt.target.value);
    }

    const handleLoadHintsFromApi = async (ev) => {
        // loads results of querying the API with current state of ingredient text input
        if (ingredient.length >= 3){
            
            if (fetcher.phrase !== ingredient){
                fetcher.setPhrase(ingredient)
                await fetcher.setHints()
            }
            try {
                setHints({isShowing:true, results: fetcher.hints && fetcher.hints.map(ingr => {
                    const ingr2 =  {...ingr, unit: ingr.possibleUnits[0]}
                    return ingr2;
                })})
            
            } catch (error) {
                
            }
        }
    }

    const handleEnterPressForHintsLoad = (ev) => {
        if (ev.key === "Enter") {
            handleLoadHintsFromApi();
        }
    }

    const handleUpdateData = () => {
        editIngredient({
            id, 
            ingredient, 
            amount, 
            unit,
            possibleUnits: [...possibleUnits]
        }, props.listId)
    }
    const handleUpdateBasedOnApiHint = (ev) => {
        
        const chosenResult = hints.results.find(item => item.id == ev.target.value)

        if (chosenResult) {
            // instantiate local id variable to update the ingredient's internal id for id from API
            const newId = chosenResult.id === id ? null : chosenResult.id                   
            fetcher.setPhrase(chosenResult.name)
            

            const apiBasedIngredient = {
                    id, 
                    ingredient: chosenResult.name,
                    amount: 1, 
                    unit: chosenResult.unit,
                    possibleUnits: chosenResult.possibleUnits
            }
            setIngredient(chosenResult.name)
            setPossibleUnits([...chosenResult.possibleUnits])
            setAmount(1)
            setUnit(chosenResult.unit)
            editIngredient(apiBasedIngredient, props.listId, newId)
            // ev.target.nextElementSibling.nextElementSibling.focus()
        }
        setHints({...hints, isShowing:false})
    }

    const handleSubmit = (e) => {        
        setIsSubmit(!isSubmit)
    }
    

    const ingredientTextInput = <input
                                    autoFocus
                                    className={classes.item} 
                                    type="text" 
                                    placeholder="ingredient" 
                                    value={ingredient}
                                    onChange={handleChangeIngredient}
                                    // onBlur={handleLoadHintsFromApi}
                                    onKeyPress={handleEnterPressForHintsLoad}
                                    />

    const ingredientHintsSelect = <select
                                    // autoFocus={!ingredient} 
                                    value={ingredient}
                                    className={classes.item + " " + classes.hints}
                                    onChange={handleChangeIngredient}
                                    onBlur={handleUpdateBasedOnApiHint}>
                                        {hints.results.map(result => {
                                            return (
                                            <option
                                                className={classes.hint}
                                                key={result.id}
                                                id={result.id}
                                                value={result.id}
                                            >
                                                {result.name}
                                            </option>);
                                            })
                                        }
                                    </select>

    const ingredientInput = 
                        <>
                            {hints.isShowing ? ingredientHintsSelect : ingredientTextInput}
                        </>

    const quantityInput = 
                        <input 
                            className={classes.item + " " + classes.count} 
                            type="number" 
                            value={amount}
                            onChange={handleChangeQuantity}
                            onBlur={handleUpdateData}
                        />

    const unitsOptions = 
                        <select 
                            className={classes.item + " " + classes.unit} 
                            value={unit}
                            onChange={handleChangeMeasure}
                            onBlur={handleUpdateData}
                            >
                            
                            {
                                possibleUnits && possibleUnits.map(
                                    unit => <option key={unit.id} value={unit.name}>{unit.name}</option>
                                    )
                            }

                        </select>    
        

    return (
        <div className={classes.container}>
            
            {ingredientInput}
            
            {quantityInput}

            {unitsOptions}  

            <button className={classes.buttonDelete} onClick={handleDeleteItem}>
                <DeleteOutlineIcon />
            </button>
        </div>
    )
}

export default IngredientItem
