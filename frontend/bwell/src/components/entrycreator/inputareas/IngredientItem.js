import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';

const IngredientItem = (props) => {
    const useStyles = makeStyles({
        container: {
            margin: '0.5rem 0',
            display: 'flex',
            justifyContent: 'space-between'
        },
        item: {
            width: '30%',
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            padding: "0.2rem",
            color: `${colors.textPrimary}`,
        },
        unit: {
            width: '20%'
        },
        buttonDelete: {
            backgroundColor: colors.thumbDown,
            border: 'none',
            borderRadius: "0.4rem",
            color: `${colors.white}`,
            cursor: 'pointer'
        }
    })
    const classes = useStyles();
    const { removeIngredient, editIngredient } = useContext(EntryCreatorContext)
    
    const [ingredient, setIngredient] = useState(props.ingredient);
    const [quantity, setQuantity] = useState(props.quantity);
    const [measure, setMeasure] = useState(props.measure)    
    const [isSubmit, setIsSubmit] = useState(false)

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

    const handleFocusOut = () => {
        editIngredient({
            id: props.id, 
            ingredient, 
            quantity, 
            measure
        }, props.listId)
    } 

    const handleSubmit = (e) => {        
        setIsSubmit(!isSubmit)
    }

    return (
        <div className={classes.container}>
            <input 
                className={classes.item} 
                type="text" 
                placeholder="ingredient" 
                value={ingredient}
                onChange={handleChangeIngredient}
                onBlur={handleFocusOut}
            />
            <input 
                className={classes.item} 
                type="number" 
                value={quantity}
                onChange={handleChangeQuantity}
                onBlur={handleFocusOut}
            />

            <select 
                className={classes.item + " " + classes.unit} 
                value={measure}
                onChange={handleChangeMeasure}
                onBlur={handleFocusOut}
            >
                <option value="unit">unit</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="stone">stone</option>
            </select>               

            <button className={classes.buttonDelete} onClick={handleDeleteItem}>
                <DeleteOutlineIcon />
            </button>
        </div>
    )
}

export default IngredientItem
