import { ClickAwayListener, makeStyles } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import React, { useState } from 'react'
import { viewportSize } from '../../utilities/utilities'
import EntryPageContainer from '../reuseable/EntryPageContainer'
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs'
import AddEntryForm from './AddEntryForm'
import { v4 as uuidv4 } from 'uuid';

const AddEntry = () => {
    const useStyles = makeStyles({
        content: {
            display: 'flex',
            flexDirection: "column",
            // margin: '0 auto',
            [`@media (min-width: ${viewportSize.tabletS})`] : {
                flexDirection: "row",
            },
        },
        part: {
            width: '95%',
            [`@media (min-width: ${viewportSize.mobileL})`] : {
                width: '97%',
            },
            [`@media (min-width: ${viewportSize.tabletS})`] : {
                width: '100%',
            },
            margin: '0.5rem 0.5rem',
            // padding: '0.25rem'
        },
        simpleBreadcrubmContainer: {
            padding: '0 0.5rem',
            // width: '90%'
        }
    })

    const [ingredients, setIngredients] = useState([
        {id: uuidv4(), ingredient: "", quantity: 0, measure: ""},
        // {id: uuidv4(), ingredient: "egg2", quantity: 2, measure: "kg"},
        // {id: uuidv4(), ingredient: "egg3", quantity: 3, measure: "g"},
        // {id: uuidv4(), ingredient: "onion", quantity: 1, measure: "g"},
    ])

    const [fitt, setFitt] = useState([])

    const [title, setTitle] = useState('entry title')

    const handleDeleteItem = (id) => {
        setIngredients(ingredients.filter(item => item.id !== id));
    }

    const handleEditItem = (newItem) => {
        const localIngredients = [...ingredients];
        const newLocalIngredients = localIngredients.map(item => {
            if(item.id === newItem.id) {
                return newItem
            }
            return item
        })

        setIngredients(newLocalIngredients);
    }

    const handleAddItem = () => {
        const newItem = {id: uuidv4(), ingredient: "", quantity: 0, measure: "unit"}
        setIngredients([...ingredients, newItem]);
    }


    const classes = useStyles()
    return (
        <EntryPageContainer>
            <div className={classes.simpleBreadcrubmContainer}>
                <SimpleBreadcrumbs path="/addentry"/>
            </div>
            <div className={classes.content}>

                <div className={classes.part}>
                    <AddEntryForm 
                        ingredients={ingredients} 
                        handleDeleteItem={handleDeleteItem}
                        handleEditItem={handleEditItem}
                        handleAddItem={handleAddItem}
                    />
                </div>
                <div className={classes.part}>

                    {/* TODO - new component */}
                    <h3>{title}</h3>
                    <ul style={{backgroundColor: 'white', padding: '2rem'}}>
                        {
                            ingredients.map(item => 
                                <li key={item.id}>
                                    {item.ingredient} - {item.quantity} - {item.measure}
                                </li>)
                        }
                    </ul>


                </div>
            </div>
        </EntryPageContainer>            
    )
}

export default AddEntry
