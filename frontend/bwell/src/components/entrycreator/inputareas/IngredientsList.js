import React from 'react'
import EventButton from '../../reuseable/EventButton'
import IngredientItem from './IngredientItem'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h3 className={classes.header}>Ingredients list</h3>

            <IngredientItem />
            <IngredientItem />
            <IngredientItem />

            <div className={classes.buttonContainer}>
                <EventButton text="Add new item" callback={() => console.log('add new item')} isAbsolute={false} />
            </div>

        </div>
    )
}

export default IngredientsList
