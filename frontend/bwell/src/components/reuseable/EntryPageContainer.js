import React from 'react';
import { makeStyles } from '@material-ui/core';
import { viewportSize } from '../../utilities/utilities';


const EntryPageContainer = ({children, size=viewportSize.tablet}) => {
    
const useStyles = makeStyles({
    container: {
        width: '100%',
        maxWidth: size,
        margin: '0.5rem',
        marginTop: '1rem',
    }
})
    const classes = useStyles();
    return (  
        <div className={classes.container}>
            {children}
        </div>
    );
}
 
export default EntryPageContainer;