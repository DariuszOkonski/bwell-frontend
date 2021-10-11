import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import CategoriesBar from '../reuseable/CategoriesBar'
import RepositoryCard from '../reuseable/RepositoryCard';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import { endpoints } from '../../utilities/utilities';
import { useState } from 'react';
import { useEffect } from 'react';

const RestWellPage = (props) => {
    const classes = props.useStylesPages();

    const {match} = props;

    const [ideas, setIdeas] = useState([]);
    const APIurl = endpoints.APIhost + endpoints.APIrestWell;

    useEffect(() => {

        const fetchIdeas = async () => {
            const response = await fetch(APIurl)
            const data = await response.json()
    
            return data 
        }

        const getIdeas = async () => {
            const ideasFromServer = await fetchIdeas()
            setIdeas(ideasFromServer)
        }
        getIdeas()
    },[ideas]);

    return (
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                    <CategoriesBar location={match.path} />
                </Grid>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container spacing={2} className={classes.cards}>
                        { ideas && ideas.map(idea => {
                            return (
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title={idea.title} cardIcon={WeekendOutlinedIcon} linkTo={endpoints.restwell_idea + idea.id} description={idea.description} />
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

export default RestWellPage
