import React, { useEffect, useState } from 'react';
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { makeStyles } from '@material-ui/core';
import {colors, viewportSize} from '../../utilities/utilities'
import { EntryHeader } from '../reuseable/EntryHeader';
import CustomButton from '../reuseable/CustomButton';
import { EntryContentPart } from '../reuseable/EntryContentPart';
import { EntryFooter } from '../reuseable/EntryFooter';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { EntryContainer } from '../reuseable/EntryContainer';
import EntryPageContainer from './../reuseable/EntryPageContainer';
import { AssignmentReturnedIcon } from '@material-ui/icons/AssignmentReturned';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { fake_getRecipe } from '../../fakeRepositories/fakeRecipies';

const useStyles = makeStyles({
  
    buttonContainer: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "0.25rem"
    }
})

const singleRecipe = {
    header: 'chicken brew'
}

const Recipe = (props) => {
    const classes = useStyles();
    const [recipe, setRecipe] = useState({})


    console.log("Recipe ==============")
    console.log(recipe)

    const {match} = props;

    useEffect(() => {
        setRecipe(fake_getRecipe(Number(props.match.params.id)))
    },[])

    return ( 
        <EntryPageContainer>
            <SimpleBreadcrumbs path={match.path} header={singleRecipe.header} />
            <EntryContainer>
                <div className={classes.buttonContainer} >
                    <CustomButton linkTo="" text="Add to plan" isAbsolute={false} icon={<EventNoteIcon/>}/>
                </div>
                <EntryHeader 
                    header={singleRecipe.header}
                    icon={<ThumbUpOutlinedIcon />}
                    rating={recipe.rating}
                />
                
                <EntryContentPart header="Ingredients" text={[["mąka", "1 łyżka"], ["woda", "1 szklanka"],]}/>

                <EntryContentPart header="Description" text='How do you use Lorem Ipsum in VS code?
A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.'/>
                
                <EntryFooter/>

            </EntryContainer>
        </EntryPageContainer>
     );
}

export default Recipe;