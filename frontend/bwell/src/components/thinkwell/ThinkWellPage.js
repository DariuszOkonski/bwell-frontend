import React from 'react'
import { Grid } from '@material-ui/core';
import CategoriesBar from '../reuseable/CategoriesBar';
import RepositoryCard from '../reuseable/RepositoryCard';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import { endpoints } from '../../utilities/utilities';
import { useState, useEffect } from 'react';


const ThinkWellPage = (props) => {

    const [ideas, setIdeas] = useState(null);
    let APIurl = endpoints.APIhost + endpoints.APIthinkWell;

    const classes = props.useStylesPages();

    const { match } = props;

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
    }, [APIurl]);

    return (
        ideas &&
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                    <CategoriesBar location={match.path} />
                </Grid>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        {ideas.map((idea) => {
                            return (
                                <Grid item xs={12} md={6}>
                                    <RepositoryCard title={idea.title} cardIcon={EmojiObjectsOutlinedIcon} linkTo={`${endpoints.thinkwell_idea}${idea.id}`} description={idea.description} />
                                </Grid>)
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ThinkWellPage
