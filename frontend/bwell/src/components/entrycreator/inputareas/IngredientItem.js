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
    const [ingredient, setIngredient] = useState(props.ingredient);
    const [quantity, setQuantity] = useState(props.quantity);
    const [measure, setMeasure] = useState(props.measure)    
    const [units, setUnits] = useState(props.possibleMeasures)
    
    const [isSubmit, setIsSubmit] = useState(false)
    
    const [hints, setHints] = useState({
        "results": [],
        "isShowing": false
    })

    const handleDeleteItem = () => {
        removeIngredient(props.id, props.listId)
    }    

    const handleChangeIngredient = (evt) => {
        setIngredient(evt.target.value)
    }

    const handleChangeQuantity = (evt) => {
        setQuantity(evt.target.value)
    }

    const handleChangeMeasure = (evt) => {
        setMeasure(evt.target.value);
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
                    console.log( ingr);
                    // const ing1 = 
                    const ingr2 =  {...ingr, unit: {id:3, name:"g"}}
                    console.log(ingr2);
                    return ingr2;
                })})
            
            } catch (error) {
                console.log(error);                
            }
        }
    }

    const handleUpdateData = () => {
        editIngredient({
            id, 
            ingredient, 
            quantity, 
            measure,
            possibleMeasures: [...units]
        }, props.listId)
    }
    const handleUpdateBasedOnApiHint = (ev) => {
        
        const chosenResult = hints.results.find(item => item.id == ev.target.value)

        if (chosenResult) {
            // instantiate local id variable to update the ingredient's internal id for id from API
            const newId = chosenResult.id === id ? null : chosenResult.id       
            console.log(chosenResult);
            fetcher.setPhrase(chosenResult.name)
            setIngredient(chosenResult.name)
            setUnits([...chosenResult.possibleUnits])
            setQuantity(1)
            setMeasure(chosenResult.unit)

            const apiBasedIngredient = {
                    id: chosenResult.id, 
                    ingredient,
                    quantity, 
                    measure,
                    possibleUnits: chosenResult.possibleUnits
            }
            editIngredient(apiBasedIngredient, props.listId, newId)
        }
        setHints({...hints, isShowing:false})
    }

    const handleSubmit = (e) => {        
        setIsSubmit(!isSubmit)
    }
    

    const ingredientTextInput = <input 
                                    className={classes.item} 
                                    type="text" 
                                    placeholder="ingredient" 
                                    value={ingredient}
                                    onChange={handleChangeIngredient}
                                    onBlur={handleLoadHintsFromApi}/>

    const ingredientHintsSelect = <select
                                    autoFocus 
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
                            value={quantity}
                            onChange={handleChangeQuantity}
                            onBlur={handleUpdateData}
                        />

    const unitsOptions = 
                        <select 
                            className={classes.item + " " + classes.unit} 
                            value={measure}
                            onChange={handleChangeMeasure}
                            onBlur={handleUpdateData}>
                            
                            {
                                units.map(
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
