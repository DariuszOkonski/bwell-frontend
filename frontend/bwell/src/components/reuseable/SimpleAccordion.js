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
import { eatWell } from '../../utilities/BackendRequests';
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
  
  const reduceIngredients = (recipe) =>{
    if (!recipe) return null;
    const ingredientsList = recipe.content
        .filter(entry => entry.type == contentTypes.ingredientsList)

    const ingredients = ingredientsList.reduce((previousValue, currentValue) => {
        var asd = [...previousValue, ...currentValue.ingredients]
        return asd
        },[])
    return {id: recipe.id, header: recipe.title, ingredients: [...ingredients]};
  }

  const mock = async (id) => {
      const recipe = await eatWell.fetchRecipe(id)
      return reduceIngredients(recipe)
    }
    const mockIds = [
      7,
    ]
  useEffect(() => {      
      const getRecipe = async () => {
        const setters = settersGenerator();
        const dietPlan = await eatWell.fetchDietPlan()
        for (const meal of Object.keys(dietPlanUrls.meals)){
          debugger;
          // const recipeFromServer = await mock(id)
          const recipeFromServer = reduceIngredients(dietPlan[meal])
          setters.next().value(recipeFromServer)
        }
      }
      getRecipe()
  },[])
  const showDetails = (key) => {
    setSelectedMeal({name: key, ingredients: meals[key].ingredients})
  }

  return (
    // <div className={classes.root}>
        <div className={classes.root}>
         {Object.keys(meals).map(key => meals[key] && 

         <div className={classes.unit}>
           {/* <EntryContainer> */}

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
                </div>            
              
              </div>            
            </AccordionDetails>

          </Accordion>
          {/* </EntryContainer> */}

         </div>
         )}
      </div>
  
  );
}