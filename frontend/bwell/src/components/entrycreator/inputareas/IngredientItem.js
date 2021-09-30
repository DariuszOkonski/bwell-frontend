import React from 'react'
import { makeStyles } from '@material-ui/core';
import { colors } from '../../../utilities/utilities';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const IngredientItem = () => {
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

    return (
        <div className={classes.container}>
            <input className={classes.item} type="text" placeholder="ingredient" />
            <input className={classes.item} type="number" placeholder="quantity" />

            <select className={classes.item + " " + classes.unit}>
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
