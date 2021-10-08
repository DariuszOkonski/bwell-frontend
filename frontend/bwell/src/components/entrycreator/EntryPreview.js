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
import { contentTypes, modules } from '../../utilities/utilities';

const useStyles = makeStyles({
    buttonContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "0.25rem"
    }
})

export const getIcon = (module) => {
    switch (module.toLowerCase()) {
        case modules.eatWell.name.toLowerCase():
            return modules.eatWell.icon
        case modules.fitWell.name.toLowerCase():
            return modules.fitWell.icon
        case modules.thinkWell.name.toLowerCase():
            return modules.thinkWell.icon
        case modules.restWell.name.toLowerCase():
            return modules.restWell.icon
    }
}



const EntryPreview = () => {
    const classes = useStyles();
        
    const {title, module, ingredientsLists, textAreas, customLists } = useContext(EntryCreatorContext)

    const [content, setContent] = useState([])
    const [isLive, setIsLive] = useState(true)
    
    
    const getCurrentContent = () => {
        
        const content = [...ingredientsLists, ...textAreas, ...customLists]
        content.sort((a, b) => a.order - b.order)

        return content;
    }

    useEffect(() => {
        setContent(getCurrentContent())
    }, [ingredientsLists, textAreas, customLists])

    const serviceComponentChoice = () => {
        return content.map(part => {
            if (part.type == contentTypes.textArea) {
                return <EntryContentPart type={part.type} header={part.header} text={part.text} key={part.id}/>
            } else if (part.type == contentTypes.ingredientsList){
                return <EntryContentPart type={part.type} header={part.header} text={part.ingredients.map(ingData => [ingData.ingredient, ingData.quantity, ingData.measure])} key={part.id}/>
            } else if (part.type == contentTypes.customList) {
                return <EntryContentPart type={part.type} header={part.header} text={part.content} key={part.id}/>
            }
        })
    }

    return ( 
        <EntryPageContainer>
            <EntryContainer>                
                <EntryHeader 
                    header={title}
                    icon={getIcon(module)}
                />

                {
                    serviceComponentChoice()
                }

                {/* {
                     recipe.content.map(part => {
                        return <EntryContentPart header={part.header} text={part.text} key={Math.random()}/>
                    })
                } */}
                
                <EntryFooter disabled={true} isLive callback={()=>setIsLive(isLive)}/>

            </EntryContainer>
        </EntryPageContainer>
     );
}

export default EntryPreview;