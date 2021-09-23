import React from 'react'
import { Grid } from '@material-ui/core'
import { useRouteMatch } from 'react-router';
import SimpleBreadcrumbs from './../reuseable/SimpleBreadcrumbs';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../utilities/utilities';
import DietStatistics from './DietStatistics';

const Calculator = (props) => {
    const {path, url} = useRouteMatch();
    const classes = props.useStylesPages();

    const useStyle = makeStyles({
        container: {
            border: `2px solid ${colors.borderPrimary}`,
            backgroundColor: colors.white,
            padding: '2rem',
            margin: '0',
            borderRadius: '1rem',
        }
    })
    

    const innerClasses = useStyle();

    // TODO - problems with spacing in grid between cards

    return (
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                    <SimpleBreadcrumbs path={path} header="" />
                </Grid>
                <Grid item spacing={2} className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        
                        <Grid className={innerClasses.container} item xs={12} md={6}>
                            <DietStatistics />
                        </Grid>

                        <Grid className={innerClasses.container} item xs={12} md={6}>
                            <div style={{backgroundColor: 'green'}}>Div 2</div>
                        </Grid>               

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Calculator
