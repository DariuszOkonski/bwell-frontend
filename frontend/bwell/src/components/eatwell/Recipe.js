import React from 'react';
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { makeStyles } from '@material-ui/core';
import {colors, viewportSize} from '../../utilities/utilities'
import { EntryHeader } from '../reuseable/EntryHeader';
import CustomButton from '../reuseable/CustomButton';
import { EntryContentPart } from '../reuseable/EntryContentPart';

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
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "0.25rem"
    }
})

const Recipe = (props) => {
    const classes = useStyles();
    return ( 
        <div className={classes.container}>
            <SimpleBreadcrumbs />
            <div className={classes.entryContainer}>
                <div className={classes.buttonContainer} >
                    <CustomButton linkTo="" text="Add to plan" isAbsolute={false} icon={<EventNoteIcon/>}/>
                </div>
                <EntryHeader/>
                <EntryContentPart header="Ingredients" text="asdfasdf"/>
            </div>
        </div>
     );
}
 
export default Recipe;