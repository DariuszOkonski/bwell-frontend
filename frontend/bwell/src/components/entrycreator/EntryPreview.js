import React, { useContext, useEffect, useState } from 'react';
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { makeStyles } from '@material-ui/core';
import { EntryHeader } from '../reuseable/EntryHeader';
import CustomButton from '../reuseable/CustomButton';
import { EntryContentPart } from '../reuseable/EntryContentPart';
import { EntryFooter } from '../reuseable/EntryFooter';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { EntryContainer } from '../reuseable/EntryContainer';
import EntryPageContainer from './../reuseable/EntryPageContainer';
import { EntryCreatorContext } from './contexts/EntryCreatorContext';
import { modules } from '../../utilities/utilities';

const useStyles = makeStyles({
    buttonContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "0.25rem"
    }
})

const getIcon = (module) => {
    switch (module) {
        case modules.eatWell.name:
            return modules.eatWell.icon
        case modules.fitWell.name:
            return modules.fitWell.icon
        case modules.thinkWell.name:
            return modules.thinkWell.icon
        case modules.restWell.name:
            return modules.restWell.icon
    }
}



const EntryPreview = () => {
    const classes = useStyles();
        
    const {title, module, customList, ingredients, } = useContext(EntryCreatorContext)



    return ( 
        <EntryPageContainer>
            <EntryContainer>                
                <EntryHeader 
                    header={title}
                    icon={getIcon(module)}
                />

                {/* {
                     recipe.content.map(part => {
                        return <EntryContentPart header={part.header} text={part.text} key={Math.random()}/>
                    })
                } */}
                <EntryFooter/>

            </EntryContainer>
        </EntryPageContainer>
     );
}

export default EntryPreview;