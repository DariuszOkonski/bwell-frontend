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


const Recipe = (props) => {
    const classes = useStyles();
    const [recipe, setRecipe] = useState(null)

    const {match} = props;

    useEffect(() => {
        // setRecipe(fake_getRecipe(Number(props.match.params.id)))
        const getRecipe = async () => {
            const recipeFromServer = await fetchRecipe()
            setRecipe(recipeFromServer)
        }
        console.log(recipe, " recipe !")
        getRecipe()
    },[])

    const fetchRecipe = async () => {
        const response = await fetch(`http://localhost:3001/recipes/${Number(props.match.params.id)}`)
        const data = await response.json()

        return data 
    }

    return ( 
        recipe && <EntryPageContainer>
            <SimpleBreadcrumbs path={match.path} header={recipe.title} />
            <EntryContainer>
                <div className={classes.buttonContainer} >
                    <CustomButton linkTo="" text="Add to plan" isAbsolute={false} icon={<EventNoteIcon/>}/>
                </div>
                <EntryHeader 
                    header={recipe.title}
                    icon={<ThumbUpOutlinedIcon />}
                    rating={recipe.rating}
                />

                {
                     recipe.content.map(part => {
                        return <EntryContentPart header={part.header} text={part.text} key={Math.random()}/>
                    })
                }
{/*                 
                <EntryContentPart header="Ingredients" text={[["mąka", "1 łyżka"], ["woda", "1 szklanka"],]}/>

                <EntryContentPart header="Description" text='How do you use Lorem Ipsum in VS code?
A tiny VS Code extension made up of a few commands that generate and insert lorem ipsum text into a text file. To use the extension, open the command palette (F1 or cmd/ctrl+shift+p, type "lorem ipsum" and select to insert either a line or paragraph.'/>
                 */}
                <EntryFooter/>

            </EntryContainer>
        </EntryPageContainer>
     );
}
// TODO 1. UUID dla mapped components 
// 2. breadcrumbs w activity 
// 3. change fake_api from JS to JSON_server 
// 4. Further views: calculator, dietplan, add recipe, error page

export default Recipe;