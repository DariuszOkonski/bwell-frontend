import React, { useContext, useEffect } from 'react';
import { eatWell } from '../../../utilities/BackendRequests';
import { contentTypes } from '../../../utilities/utilities';
import { DietPlanContext } from './context/DietPlanContext';

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
            console.log(recipeFromServer);
            setBreakfast({...recipeFromServer})
        }
        getRecipe()
    },[])

    
    return ( 
        <div>
            <div>{breakfast.header}</div>
            <h2>DietPlanPage</h2>
        </div>
     );
}
 
export default DietPlanPage;