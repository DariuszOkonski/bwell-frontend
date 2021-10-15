import React, { useContext, useEffect } from 'react';
import { eatWell } from '../../../utilities/BackendRequests';
import { contentTypes, viewportSize } from '../../../utilities/utilities';
import { DietPlanContext } from './context/DietPlanContext';
import { useRouteMatch } from 'react-router'
import EntryPageContainer from '../../reuseable/EntryPageContainer'
import SimpleBreadcrumbs from '../../reuseable/SimpleBreadcrumbs'
import { makeStyles } from '@material-ui/core';
import { EntryContainer } from '../../reuseable/EntryContainer';
import SimpleAccordion from '../../reuseable/SimpleAccordion';
import IngredientsTable from './IngredientsTable';

const DietPlanPage = () => {

    const { breakfast, setBreakfast, setLunch, setSupper, setDinner } = useContext(DietPlanContext);

    const mock = async (id) => {
        const recipe = await eatWell.fetchRecipe(id)
        const ingrientsList = recipe.content
          .filter(entry => entry.type === contentTypes.ingredientsList)
          .reduce((previousValue, currentValue) => {
              return [...previousValue.ingredients, ...currentValue.ingredients]
            })
        return {id: recipe.id, header: recipe.title, ingredients: ingrientsList};
        // return {id: recipe.id, header: recipe.header, ingredients: [...ingrientsList]};
      }

    useEffect(() => {
        // setRecipe(fake_getRecipe(Number(props.match.params.id)))
        const getRecipe = async () => {
            let recipeFromServer = await mock("58512254-1150-4783-aa08-8b862e737f71")
            setBreakfast({...recipeFromServer})

            recipeFromServer = await mock("e617a8a6-d9b5-4e90-916a-ae8e4898efff")
            setLunch({...recipeFromServer})

            recipeFromServer = await mock("bc0181e3-e1c0-4591-b072-c27829c7a66d")
            setDinner({...recipeFromServer})

            recipeFromServer = await mock("3")
            setSupper({...recipeFromServer})
        }
        getRecipe()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const {path} = useRouteMatch()    
    // TODO to remove
    const fakePath = '/eatWell/dietplan';    
    console.log(path)

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
                        {/* <h2>First page</h2>
                        <h2>First page</h2>
                        <h2>First page</h2>
                        <h2>First page</h2>
                        <h2>First page</h2>
                        <h2>First page</h2>
                        <h2>First page</h2> */}
                        <IngredientsTable ingredients={breakfast.ingredients} />

                    </EntryContainer>
                </div>
                <div className={classes.part}>
                    <EntryContainer>
                        {/* <h2>Second page</h2>
                        <h2>Second page</h2>
                        <h2>Second page</h2>
                        <h2>Second page</h2>
                        <h2>Second page</h2>
                        <h2>Second page</h2>
                        <h2>Second page</h2>
                        <h2>Second page</h2>
                        <h2>Second page</h2> */}
                        <SimpleAccordion />

                    </EntryContainer>

                </div>
            </div>
        </EntryPageContainer>        
     );
}
 
export default DietPlanPage;