import React, { useEffect, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import CategoriesBar from '../reuseable/CategoriesBar'
import RepositoryCard from '../reuseable/RepositoryCard';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { endpoints } from '../../utilities/utilities';

// const useStyles = makeStyles((theme) => ({
//     categoriesBar: {
//         justifyContent: "center",
//         marginTop: "1rem"
//     },
//     spacearound: {
//         justifyItems: 'space-around'
//     },
//     cards: {
//         justifyContent: 'center',
//         margin: 0
//     }
// }));


const FitWellPage = (props) => {
    const classes = props.useStylesPages();
    const {match} = props;

    const [activites, setActivities] = useState([])
    
    useEffect(() => {
        const getActivities = async () => {
            const recipesFromServer = await fetchActivities()
            setActivities(recipesFromServer)
        }
        getActivities()
    },[]);

    const fetchActivities = async () => {
        const response = await fetch('http://localhost:3001/activities/')
        const data = await response.json()

        return data 
    }

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
                        {/* <Grid item xs={12} md={6}>
                            <RepositoryCard title="Activity" cardIcon={DirectionsBikeIcon} linkTo={endpoints.fitwell_activity} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Activity" cardIcon={DirectionsBikeIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Activity" cardIcon={DirectionsBikeIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Activity" cardIcon={DirectionsBikeIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Activity" cardIcon={DirectionsBikeIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Activity" cardIcon={DirectionsBikeIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FitWellPage
