import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useRouteMatch } from 'react-router';
import SimpleBreadcrumbs from './../reuseable/SimpleBreadcrumbs';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../utilities/utilities';
import DietStatistics from './DietStatistics';
import CalculatorFormFunctional from './CalculatorFormFunctional';

const Calculator = (props) => {
    const {path} = useRouteMatch();
    const classes = props.useStylesPages();
    // somedescription

    const useStyle = makeStyles({        
        singleCard: {
            margin: '0.5rem',
            padding: '1rem',
            border: `2px solid ${colors.borderPrimary}`,
            backgroundColor: colors.white,        
            borderRadius: '1rem',
        }
    })
    
    const [statistics, setStatistics] = useState({
        caloriesDemand: 1800,
        caloriesPercentage: 1,
        carbohydratesDemand: 1800/4*0.45,
        carbohydratesPercentage: 0.45,
        fatDemand: 1800/9*0.3,
        fatPercentage: 0.25,
        proteinDemand: 1800/4*0.3,
        proteinPercentage: 0.3,
        userId: 0, //Get logged userId
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
                            <DietStatistics statistics={statistics}/>
                        </div>                        
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <div className={innerClasses.singleCard}>
                            <CalculatorFormFunctional updateResults={setStatistics}/>
                        </div>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Calculator
