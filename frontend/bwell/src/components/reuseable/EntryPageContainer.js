import React from 'react';
import { makeStyles } from '@material-ui/core';
import { viewportSize } from '../../utilities/utilities';

const useStyles = makeStyles({
    container: {
        width: '100%',
        maxWidth: viewportSize.tablet,
        margin: '0.5rem',
        marginTop: '1rem',
    }
})

const EntryPageContainer = ({children}) => {
    const classes = useStyles();
    return (  
        <div className={classes.container}>
            {children}
        </div>
    );
}
 
export default EntryPageContainer;