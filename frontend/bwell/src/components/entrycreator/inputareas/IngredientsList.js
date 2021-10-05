import React, { useContext, useState } from 'react'
import EventButton from '../../reuseable/EventButton'
import IngredientItem from './IngredientItem'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';
import { v4 } from 'uuid';

const IngredientsList = () => {    

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
            marginTop: "0.5rem",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })


    const classes = useStyles();    
    const {ingredients, addIngredient } = useContext(EntryCreatorContext)    
    
    const showIngredients = ingredients.map(
        (item) => <IngredientItem 
            {...item} 
        />)

        

    const handleAddItem = (e) => {
        addIngredient(v4(), "", 0, "unit");
    }

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
