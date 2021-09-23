import React from 'react'
import { makeStyles } from '@material-ui/core';
import { AccessibilityNew } from '@material-ui/icons';
import { colors } from '../../utilities/utilities';

const DietStatistics = () => {
    const useStyles = makeStyles({
        container: {
            display: 'flex'
        },
        iconContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        icon: {
            fontSize: '6rem',
            color: colors.thumbUp
        },
        text: {
            fontSize: '1.5rem',
            color: colors.textPrimary,
            margin: '1rem 0'
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.iconContainer}>
                <AccessibilityNew className={classes.icon}/>                
            </div>
            <div>
                <p className={classes.text}>Your current BMI: 28</p>
                <p className={classes.text}>Target BMI: 25</p>
                <p className={classes.text}>Demand BWT: 20%</p>
            </div>
        </div>
    )
}

export default DietStatistics
