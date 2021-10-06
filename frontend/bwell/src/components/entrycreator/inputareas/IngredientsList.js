import React, { useContext, useState } from 'react'
import EventButton from '../../reuseable/EventButton'
import IngredientItem from './IngredientItem'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';
import { v4 } from 'uuid';

const IngredientsList = ({listId}) => {    

    const useStyles = makeStyles({
        container: {
            margin: '1.5rem 0'
        },
        header: {
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.4rem",
            display: "block",
            padding: "0.3rem",
            width: '100%',
            color: `${colors.textPrimary}`,
            fontWeight: '500',
            fontSize: "1rem"
        },
        buttonContainer: {
            marginTop: "0.5rem",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })


    const classes = useStyles();    
    // const {ingredients, addIngredient } = useContext(EntryCreatorContext)    
    const { ingredientsLists, addIngredient, editIngredientsListTitle } = useContext(EntryCreatorContext)    
    
    const [currentList] = ingredientsLists.filter(list => list.id === listId)
    
    const showIngredients = currentList.ingredients && currentList.ingredients.map(
        (item) => <IngredientItem 
            {...item} listId={listId} key={item.id}
        />);

        

    const handleAddItem = (e) => {
        addIngredient(v4(), "", 0, "unit", listId);
    }

    const handleChangeTitle = (e) => {
        editIngredientsListTitle(e.target.value, listId)
    }

    return (
        <div className={classes.container}>
            <input className={classes.header} value={currentList.header} placeholder="Ingredients title" onChange={handleChangeTitle}/>

            {showIngredients}

            <div className={classes.buttonContainer}>
                <EventButton text="Add new item" callback={handleAddItem} isAbsolute={false} />
            </div>

        </div>
    )
}

export default IngredientsList