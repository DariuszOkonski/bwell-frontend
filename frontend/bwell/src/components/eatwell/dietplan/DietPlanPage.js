import React, { useContext, useEffect } from 'react';
import { eatWell } from '../../../utilities/BackendRequests';
import { contentTypes, viewportSize } from '../../../utilities/utilities';
import { DietPlanContext } from './context/DietPlanContext';

import { useHistory, useRouteMatch } from 'react-router'
import EntryPageContainer from '../../reuseable/EntryPageContainer'
import SimpleBreadcrumbs from '../../reuseable/SimpleBreadcrumbs'
import { makeStyles } from '@material-ui/core';
import { EntryContainer } from '../../reuseable/EntryContainer';
import SimpleAccordion from '../../reuseable/SimpleAccordion';
import IngredientsTable from './IngredientsTable';

const DietPlanPage = () => {

    const { breakfast, setBreakfast, demand, lunch } = useContext(DietPlanContext);

    const mock = async () => {
        const recipe = await eatWell.fetchRecipe("58512254-1150-4783-aa08-8b862e737f71")
        const ingrientsList = recipe.content
          .filter(entry => entry.type == contentTypes.ingredientsList)
          .reduce((previousValue, currentValue) => {
              return [...previousValue.ingredients, ...currentValue.ingredients]
            })
        return {id: recipe.id, header: recipe.title, ingredients: ingrientsList};
        // return {id: recipe.id, header: recipe.header, ingredients: [...ingrientsList]};
      }

    useEffect(() => {
        // setRecipe(fake_getRecipe(Number(props.match.params.id)))
        const getRecipe = async () => {
            const recipeFromServer = await mock()
            setBreakfast({...recipeFromServer})
        }
        getRecipe()
    },[])

    const {path} = useRouteMatch()
    
    // TODO to remove
    const fakePath = '/eatWell/dietplan';    
    // console.log(path)

    const useStyles = makeStyles({
        content: {
            display: 'flex',
            flexDirection: "column",
            [`@media (min-width: ${viewportSize.laptop})`] : {
                flexDirection: "row",
            },
        },
        part: {
            width: '95%',
            [`@media (min-width: ${viewportSize.mobileL})`] : {
                width: '97%',
            },
            [`@media (min-width: ${viewportSize.laptop})`] : {
                width: '100%',
            },
            margin: '0.5rem 0.5rem',
            // padding: '0.25rem'
        },
        simpleBreadcrubmContainer: {
            padding: '0 0.5rem',
            // width: '90%'
        }
    })


    const classes = useStyles()


    return ( 
        <EntryPageContainer size={viewportSize.laptop}>
            <div className={classes.simpleBreadcrubmContainer}>
                <SimpleBreadcrumbs path={fakePath}/>
            </div>
            <div className={classes.content}>

                <div className={classes.part}>
                    <EntryContainer>
                        
                        <IngredientsTable ingredients={breakfast.ingredients} />

                    </EntryContainer>
                </div>
                <div className={classes.part}>
                    <EntryContainer>

                        <SimpleAccordion />

                    </EntryContainer>

                </div>
            </div>
        </EntryPageContainer>        
     );
}
 
export default DietPlanPage;