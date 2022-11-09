import React, { useContext, useEffect, useState } from 'react'
import EventButton from '../../reuseable/EventButton'
import IngredientItem from './IngredientItem'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import { EntryCreatorContext } from '../contexts/EntryCreatorContext';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { v4 } from 'uuid';
import { keyboardcombinations } from '../../../utilities/keyboardcombinations';

const IngredientsList = ({listId, content}) => {    

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
        headerContainer: {
            display: 'flex'
        },
        buttonContainer: {
            marginTop: "0.5rem",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonDelete: {
            backgroundColor: colors.thumbDown,
            border: 'none',
            borderRadius: "0.4rem",
            color: `${colors.white}`,
            cursor: 'pointer',
            marginLeft: '0.2rem'
        }
    })

        const classes = useStyles();    
    // const {ingredients, addIngredient } = useContext(EntryCreatorContext)    
    const { ingredientsLists, addIngredient, editIngredientsListTitle, removeIngredientsList } = useContext(EntryCreatorContext)    
    
    const [currentList] =  ingredientsLists.filter(list => list.id === listId)
    // const [currentList] =  content.ingredients;
       
    const [title, setTitle] = useState(content.header);
    const [notOnCooldown, setNotOnCooldown] = useState(true);

    const handleAddItem = (e) => {
        addIngredient(v4(), "", 0, "unit", listId);
    }
    
    const handleChangeTitle = (e) => {
        editIngredientsListTitle(e.target.value, listId)
    }
    
    const handleRemoveIngredientsList = () => {
        removeIngredientsList(listId);
    }

    useEffect(() => {
        const callback = e => {
            if (keyboardcombinations.ctrlShiftArrowDown) {
                addIngredient(v4(), "", 0, "unit", listId);
            }  
        }
        document.addEventListener('keydown', callback, false)
        return () => {document.removeEventListener('keydown', callback)}
    }, [])

    
    const showIngredients = ( currentList && currentList.ingredients) && currentList.ingredients.map(
        (item) => <IngredientItem 
            {...item} listId={listId} key={item.id ? item.id : v4()} 
        />);
    return (
        currentList ? <div className={classes.container}>
            <div className={classes.headerContainer}>
                <input className={classes.header} value={title} placeholder="Ingredients title" onChange={(e) => setTitle(e.target.value)} onBlur={handleChangeTitle}/>
                <button className={classes.buttonDelete} onClick={handleRemoveIngredientsList}>
                    <DeleteOutlineIcon />
                </button>
            </div>

            {showIngredients}

            <div className={classes.buttonContainer}>
                <EventButton text="Add new item" callback={handleAddItem} isAbsolute={false} />
            </div>

        </div>
        :
        <></>
    )
}

export default IngredientsList
