import React from 'react';
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs';
import { makeStyles } from '@material-ui/core';
import {viewportSize} from '../../utilities/utilities'

const useStyles = makeStyles({
    container: {
        width: '100%',
        maxWidth: viewportSize.laptop,
        margin: '0.5rem'
    }
})

const Recipe = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.container}>
            <SimpleBreadcrumbs />

            <h1>Recipie</h1>
            <h2>Hello world</h2>
        </div>
     );
}
 
export default Recipe;