import React, { useEffect, useState } from 'react';
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
import { v4 } from 'uuid';
import { eatWell } from '../../utilities/BackendRequests';
import DeleteButton from '../reuseable/DeleteButton';
import EventButton from '../reuseable/EventButton';
import ModalEventButton from '../reuseable/ModalEventButton';

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
            const recipeFromServer = await eatWell.fetchRecipe(props.match.params.id)
            setRecipe(recipeFromServer)
        }
        getRecipe()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return ( 
        recipe && <EntryPageContainer>
            <SimpleBreadcrumbs path={match.path} header={recipe.title} />
            <EntryContainer>
                <div className={classes.buttonContainer} >
                    <ModalEventButton/>
                </div>
                <EntryHeader 
                    header={recipe.title}
                    icon={<RestaurantIcon />}
                    rating={recipe.rating}
                />

                {
                     recipe.content.map(part => {
                        return <EntryContentPart header={part.header} text={part.text ? part.text : part.ingredients} key={v4()} type={part.type}/>
                    })
                }
                <EntryFooter entryId={recipe.id} module="eatwell"/>
                <DeleteButton entryId={recipe.id}/>
            </EntryContainer>
        </EntryPageContainer>
     );
}

export default Recipe;