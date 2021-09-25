import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { useParams, useRouteMatch } from 'react-router';
import RepositoryDetailsCard from './RepositoryDetailsCard';
import SimpleBreadcrumbs from './reuseable/SimpleBreadcrumbs';
import { useEffect } from 'react';
import { useState } from 'react';
import { endpoints } from '../utilities/utilities';

const useStyles = makeStyles((theme) => ({
    categoriesBar: {
        justifyContent: "center",
        marginTop: "1rem"
    },
    spacearound: {
        justifyItems: 'space-around'
    },
    cards: {
        justifyContent: 'center'
    }
}));

const RepositoryIdeaPage = (props) => {

    const [ideas, setIdeas] = useState([]);
    let APIurl = "";

    if (props.repositoryType === 'restWell') APIurl = endpoints.APIhost + endpoints.APIrestWell;
    if (props.repositoryType === 'thinkWell') APIurl = endpoints.APIhost + endpoints.APIthinkWell;

    useEffect(() => {
        const getIdeas = async () => {
            const ideasFromServer = await fetchIdeas()
            setIdeas(ideasFromServer)
        }
        getIdeas()
    },[]);
    
    let { id } = useParams();

    const fetchIdeas = async () => {
        const response = await fetch(APIurl + "/" + id)
        const data = await response.json()

        return data 
    }

    const classes = useStyles();
    const {url} = useRouteMatch();

    return (
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                <SimpleBreadcrumbs path={url} header={ideas.title} />
                </Grid>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        { ideas &&
                        <Grid item xs={12} md={8}>
                            <RepositoryDetailsCard title={ideas.title} cardIcon={props.repositoryType} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default RepositoryIdeaPage
