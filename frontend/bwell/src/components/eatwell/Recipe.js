import React from 'react';
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs';
import { makeStyles } from '@material-ui/core';
import {colors, viewportSize} from '../../utilities/utilities'
import { EntryHeader } from '../reuseable/EntryHeader';

const useStyles = makeStyles({
    container: {
        width: '100%',
        maxWidth: viewportSize.tablet,
        margin: '0.5rem',
        marginTop: '1rem',
    },
    entryContainer: {
        width: '100%',
        borderRadius: '1rem',
        border: `1px solid ${colors.borderPrimary}`,
        padding: '1rem',
        backgroundColor: `${colors.white}`,
        marginTop: '1rem'
    }
})

const Recipe = (props) => {
    const classes = useStyles();
    return ( 
        <div className={classes.container}>
            <SimpleBreadcrumbs />
            <div className={classes.entryContainer}>
                <EntryHeader/>
            </div>
        </div>
     );
}
 
export default Recipe;