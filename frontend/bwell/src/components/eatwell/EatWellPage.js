import React, { useEffect, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import CategoriesBar from '../reuseable/CategoriesBar'
import RepositoryCard from '../reuseable/RepositoryCard';
import { ThumbUpOutlined } from '@material-ui/icons';
import { endpoints } from '../../utilities/utilities';
import { fake_getAllRecipesShorts } from '../../fakeRepositories/fakeRecipies';

// const fakeRecipies = [
//     {
//         id: 1, 
//         title: 'recipies 1', 
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
//     {
//         id: 2, 
//         title: 'recipies 12', 
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, rem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore"},
//     {
//         id: 3, 
//         title: 'recipies 13', 
//         description: "Lorem ipsum dolor sit amet, rem ipsum dolor sit amet, consectetur adipiscing elitrem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},
// ]


const EatWellPage = (props) => {

    const [recipes, setRecipes] = useState([]);

    const classes = props.useStylesPages();
    const {match} = props;

    useEffect(() => {
        setRecipes(fake_getAllRecipesShorts())
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
                                    cardIcon={ThumbUpOutlined} 
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
