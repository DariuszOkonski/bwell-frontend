import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import CategoriesBar from '../reuseable/CategoriesBar'
import RepositoryCard from '../reuseable/RepositoryCard';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { endpoints } from '../../utilities/utilities';
import { fitWell } from '../../utilities/BackendRequests';

const FitWellPage = (props) => {
    const classes = props.useStylesPages();
    const {match} = props;

    const [activites, setActivities] = useState([])
    
    let count = activites.length
    useEffect(() => {
        const getActivities = async () => {
            const recipesFromServer = await fitWell.fetchActivities()
            setActivities(recipesFromServer)
            count = recipesFromServer.length
        }
        getActivities()
    },[count]);

    return (
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                    <CategoriesBar location={match.path} />
                </Grid>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        
                    {
                        activites.map(activity => (
                            <Grid key={activity.id} item xs={12} md={6}>
                                <RepositoryCard 
                                    title={activity.title} 
                                    cardIcon={DirectionsBikeIcon} 
                                    linkTo={`${endpoints.fitwell_activity}${activity.id}`} 
                                    description={activity.description} 
                                />
                            </Grid>
                        ))
                    }                        
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FitWellPage
