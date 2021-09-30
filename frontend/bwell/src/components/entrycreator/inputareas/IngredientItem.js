import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const IngredientItem = ({id, ingredient, quantity, measure, callback}) => {
    
    const [localIngredient, setIngredient] = useState(ingredient)
    const [localQuantity, setQuantity] = useState(quantity)
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
    const handleIngredient = evt => {
        setIngredient(evt.target.value)
        // callback(localIngredient, id)
        console.log("local ing ",localIngredient)
    }

    const handleQuantity = evt => {
        setQuantity(evt.target.value)
        console.log("local q ", localQuantity)
    }

    useEffect(() => {
        callback(localIngredient, localQuantity, id)
    }, [localIngredient, localQuantity])
    return (
        <div className={classes.container}>
            <input 
                className={classes.item} 
                type="text" 
                placeholder="ingredient" 
                value={localIngredient} 
                onChange={handleIngredient}
            />
            <input 
                className={classes.item} 
                type="number" 
                value={quantity} 
                value={localQuantity} 
                onChange={handleQuantity}
            />

            <select className={classes.item + " " + classes.unit} value={measure}>
                <option value="unit">unit</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
            </select>               

            <button className={classes.buttonDelete}>
                <DeleteOutlineIcon />
            </button>
        </div>
    )
}

export default IngredientItem
