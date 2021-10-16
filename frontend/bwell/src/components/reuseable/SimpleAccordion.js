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
import { contentTypes } from '../../utilities/utilities';
import { eatWell } from '../../utilities/BackendRequests';
import EventButton from './EventButton';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '1rem',
    marginTop: "1rem"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  details: {
    width: "100%",
    textAlign: "right"
  },
  btnContainer: {
    marginTop: "0.5rem"
  },
  unit: {
    paddingBottom: '0.5rem'
  },
  selected: {
    backgroundColor: "yellow",
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const { meals, setMeals, settersGenerator, selectedMeal, setSelectedMeal } = useContext(DietPlanContext);
  
  const mock = async (id) => {
      const recipe = await eatWell.fetchRecipe(id)
      
      const ingredientsList = recipe.content
        .filter(entry => entry.type == contentTypes.ingredientsList)

      const ingredients = ingredientsList.reduce((previousValue, currentValue) => {
          var asd = [...previousValue, ...currentValue.ingredients]
          return asd
          },[])
      console.log(ingredients, "ASD!");
      return {id: recipe.id, header: recipe.title, ingredients: [...ingredients]};
      // return {id: recipe.id, header: recipe.header, ingredients: [...ingrientsList]};
    }
    const mockIds = [
      "58512254-1150-4783-aa08-8b862e737f71",
      "bc0181e3-e1c0-4591-b072-c27829c7a66d",
      "e617a8a6-d9b5-4e90-916a-ae8e4898efff"
    ]
  useEffect(() => {      
      const getRecipe = async () => {
        const setters = settersGenerator();
        for (const id of mockIds){
          const recipeFromServer = await mock(id)
          console.log(recipeFromServer);
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
           <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${meals[key]}a-content`}
            id={`panel${meals[key]}a-content`}
            >
            <Typography className={`${key === selectedMeal.name && classes.selected}`}>{key}: {meals[key].header} </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div className={classes.details}>
              <BasicTable meal={meals[key]}/>
              <div className={classes.btnContainer}>
                <EventButton text="Details" isAbsolute={false} callback={()=>showDetails(key)}/>
              </div>            
            </div>            

            </AccordionDetails>

        </Accordion>
         </div>
         )}
      </div>
  
  );
}