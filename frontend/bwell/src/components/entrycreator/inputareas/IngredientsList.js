import React, { useState } from 'react'
import EventButton from '../../reuseable/EventButton'
import IngredientItem from './IngredientItem'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';

const IngredientsList = ({ ingredients, handleDeleteItem, handleEditItem, handleAddItem }) => {    

    const useStyles = makeStyles({
        container: {
            margin: '1.5rem 0'
        },
        header: {
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            padding: "0.2rem",
            color: `${colors.textPrimary}`,
            fontWeight: '400'
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    const classes = useStyles();    
    
    const showIngredients = ingredients.map(
        (item) => <IngredientItem 
            {...item} 
            handleDeleteItem={handleDeleteItem}
            handleEditItem={handleEditItem}
        />)

    return (
        <div className={classes.container}>
            <h3 className={classes.header}>Ingredients list</h3>

            {showIngredients}

            <div className={classes.buttonContainer}>
                <EventButton text="Add new item" callback={handleAddItem} isAbsolute={false} />
            </div>

        </div>
    )
}

export default IngredientsList
