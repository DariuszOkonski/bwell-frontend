import React from 'react'
import { Grid } from '@material-ui/core'
import { useRouteMatch } from 'react-router';
import SimpleBreadcrumbs from './../reuseable/SimpleBreadcrumbs';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../utilities/utilities';
import DietStatistics from './DietStatistics';
import CalculatorForm from './CalculatorForm';

const Calculator = (props) => {
    const {path, url} = useRouteMatch();
    const classes = props.useStylesPages();

    const useStyle = makeStyles({        
        singleCard: {
            margin: '0.5rem',
            padding: '1rem',
            border: `2px solid ${colors.borderPrimary}`,
            backgroundColor: colors.white,        
            borderRadius: '1rem',
        }
    })
    

    const innerClasses = useStyle();


    return (
        <Grid container xs={12} className={classes.categoriesBar}>
            <Grid item xs={12} md={8} style={{marginBottom: '0.5rem'}}>
                <SimpleBreadcrumbs path={path} header="" style={{padding: '15rem'}} isCalculator={true} />
            </Grid>
            <Grid item className={classes.cards} xs={12} md={8}>                
                <Grid container xs={12} className={classes.cards}>
                    
                    <Grid item xs={12} md={6} >
                        <div className={innerClasses.singleCard}>
                            <DietStatistics/>
                        </div>                        
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className={innerClasses.singleCard}>
                            <CalculatorForm />
                        </div>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Calculator
