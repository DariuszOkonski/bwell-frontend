import React from 'react'
import { Grid } from '@material-ui/core'
import { useRouteMatch } from 'react-router';
import SimpleBreadcrumbs from './../reuseable/SimpleBreadcrumbs';

const Calculator = (props) => {
    const {path, url} = useRouteMatch();
    const classes = props.useStylesPages();

    console.log(classes)

    return (
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                    <SimpleBreadcrumbs path={path} header="" />
                </Grid>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        <Grid item xs={12} md={6}>
                            <div>Div 1</div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div>Div 2</div>
                        </Grid>               
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Calculator
