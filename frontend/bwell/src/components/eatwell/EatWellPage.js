import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import CategoriesBar from '../reuseable/CategoriesBar'
import RepositoryCard from '../reuseable/RepositoryCard';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { endpoints } from '../../utilities/utilities';
import { eatWell } from '../../utilities/BackendRequests';


const EatWellPage = (props) => {

    const [recipes, setRecipes] = useState([]);

    const classes = props.useStylesPages();
    const {match} = props;

    useEffect(() => {
        const getRecipes = async () => {
            const recipesFromServer = await eatWell.fetchRecipes()
            setRecipes(recipesFromServer)
        }
        getRecipes()
    },[]);


    return (
        <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
            <Grid item xs={12} md={8}>
                <CategoriesBar location={match.path}/>
            </Grid>
            <Grid item className={classes.cards} xs={12} md={8}>                
                <Grid container xs={12} spacing={2} className={classes.cards}>
                
                    {
                        recipes.map(recipe => (
                            <Grid key={recipe.id} item xs={12} md={6}>
                                <RepositoryCard 
                                    title={recipe.title} 
                                    cardIcon={RestaurantIcon} 
                                    linkTo={`${endpoints.eatwell_recipe}${recipe.id}`} 
                                    description={recipe.description} 
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EatWellPage
