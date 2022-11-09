import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DietPlanContext } from '../eatwell/dietplan/context/DietPlanContext';
import BasicTable from './BasicTable';
import { EntryContainer } from './EntryContainer';
import { colors, contentTypes, dietPlanUrls } from '../../utilities/utilities';
import { eatWell, fetchNutritionDetailsForRecipesIngredients } from '../../utilities/BackendRequests';
import EventButton from './EventButton';


export default function DietPlanRecipesAccordion() {
  
const useStyles = makeStyles((theme) => ({
  root: {
    // width: '1rem',
    marginTop: "1rem"
  },
  heading: {
    border: `1px solid ${colors.borderPrimary}`,
    borderRadius: "0.4rem",
    display: "block",
    padding: "0.3rem",
    width: '100%',
    color: `${colors.textPrimary}`,
    fontWeight: '500',
    fontSize: "1rem"
  },
  details: {
    // width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "right"
  },
  detailRoot: {
    display: "block"
  },
  btnContainer: {
    marginTop: "0.5rem"
  },
  unit: {
    paddingBottom: '0.5rem',
  },
  selected: {
    backgroundColor: "yellow",
  }
}));
  const classes = useStyles();
  const { meals, setMeals, settersGenerator, selectedMeal, setSelectedMeal } = useContext(DietPlanContext);
  
  const reduceIngredients = async (recipe) =>{
    if (!recipe) return null;

    const ingrDetails = await eatWell.fetchNutritionDetailsForRecipesIngredients(recipe.id);

    const ingredientsList = recipe.content
        .filter(entry => entry.type == contentTypes.ingredientsList)

    const ingredients = ingredientsList.reduce((previousValue, currentValue) => {
        var asd = [...previousValue, ...currentValue.ingredients]
        return asd
        },[])
    return {id: recipe.id, header: recipe.title, ingredients: [...ingredients], ingredientDetails: ingrDetails.ingredientsNutrients};
  }

  useEffect(() => {      
      const getRecipe = async () => {
        const setters = settersGenerator();
        const dietPlan = await eatWell.fetchDietPlan()
        for (const meal of Object.keys(dietPlanUrls.meals)){
          // const recipeFromServer = await mock(id)
          const recipeFromServer = await reduceIngredients(dietPlan[meal])
          console.log(recipeFromServer);
          setters.next().value(recipeFromServer)
        }
        setters.next().value()
      }
      getRecipe()
  },[])
  const showDetails = (key, withNutrients=false) => {
    setSelectedMeal({withNutrients, name: key, ingredients: meals[key].ingredients, ingrDetails: meals[key].ingredientDetails})
  }

  return (
        <div className={classes.root}>
         {Object.keys(meals).map(key => meals[key] && 

         <div key={key} className={classes.unit}>

           <Accordion >
            
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${meals[key]}a-content`}
              id={`panel${meals[key]}a-content`}
            >
              <h4 className={`${key === selectedMeal.name && classes.selected}`}>{key}: {meals[key].header} </h4>
            </AccordionSummary>
            
            <AccordionDetails classes={{root: classes.detailRoot}}>
              <div className={classes.details}>
              
                <BasicTable meal={meals[key]}/>
                  
                <div className={classes.btnContainer}>
                  <EventButton text="Details" isAbsolute={false} callback={()=>showDetails(key)}/>
                  <EventButton text="Nutrition details" isAbsolute={false} callback={()=>showDetails(key, true)}/>
                </div>            
              
              </div>            
            </AccordionDetails>

          </Accordion>

         </div>
         )}
      </div>
  
  );
}