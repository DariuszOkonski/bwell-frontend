import React, { useState } from 'react'
import EventButton from '../../reuseable/EventButton'
import IngredientItem from './IngredientItem'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';

const IngredientsList = () => {

    const [ingredients, setIngredients] = useState([
        {id: 1, ingredient: "egg", quantity: 1, measure: "unit"},
        {id: 2, ingredient: "egg2", quantity: 2, measure: "kg"},
        {id: 3, ingredient: "egg3", quantity: 3, measure: "g"},
])

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
    
    const changeElement = (ingredient, quantity, id) => {
        console.log("=== > ing ", ingredient)
        console.log("=== > qyabt ", quantity)
        console.log("=== > id ", id)
        const localIngredients = [...ingredients]
        const localingredients2 = localIngredients.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    ingredient,
                    quantity
                }
            }
            return item 
        })
        setIngredients(localingredients2)
    }
    const showIngredients = ingredients.map((item) => <IngredientItem {...item} callback={changeElement}/>)

    return (
        <div className={classes.container}>
            <h3 className={classes.header}>Ingredients list</h3>

            {showIngredients}

            <div className={classes.buttonContainer}>
                <EventButton text="Add new item" callback={() => console.log('add new item')} isAbsolute={false} />
            </div>

        </div>
    )
}

export default IngredientsList
