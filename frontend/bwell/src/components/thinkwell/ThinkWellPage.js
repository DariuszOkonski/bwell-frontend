import React from 'react'
import { Grid } from '@material-ui/core';
import CategoriesBar from '../reuseable/CategoriesBar';
import RepositoryCard from '../reuseable/RepositoryCard';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { endpoints } from '../../utilities/utilities';
import { useState, useEffect } from 'react';


const ThinkWellPage = (props) => {

    const [excercises, setExcercises] = useState(null);
    let API = endpoints.APIhost + endpoints.APIthinkWell;

    const classes = props.useStylesPages();

    const { match } = props;

    useEffect(() => {

        const fetchExcercises = async () => {
            const response = await fetch(API)
            const data = await response.json()
    
            return data 
        }

        const getExcercises = async () => {
            const excercisesFromServer = await fetchExcercises()
            setExcercises(excercisesFromServer)
        }
        getExcercises()
    },[]);


    return (
        excercises &&
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                    <CategoriesBar location={match.path} />
                </Grid>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        {
                            excercises.map(excercise => {
                                return(
                                    <Grid item xs={12} md={6}>
                                        <RepositoryCard title={excercise.title} cardIcon={EmojiObjectsOutlinedIcon} linkTo={`${endpoints.thinkwell_idea}${excercise.id}`} description={excercise.description} key={excercise.id}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ThinkWellPage
