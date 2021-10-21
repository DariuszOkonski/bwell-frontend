import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import FavouritesExpandableCard from './FavouritesExpandableCard';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import { useEffect, useState } from 'react';
import { endpoints } from '../../utilities/utilities';

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


const FavouritesPage = (props) => {
    const classes = useStyles();
    const loggedUser = 1;

    const APIurl = endpoints.APIhost + endpoints.APIusers;

    const [userData, setUserData] = useState(null);

    useEffect(() => {

        const fetchFavourites = async () => {
            const response = await fetch(`${APIurl}${loggedUser}`)
            const data = await response.json()
    
            return data 
        }

        const getIdeas = async () => {
            const userData = await fetchFavourites()
            setUserData(userData)
        }
        getIdeas()
    },[APIurl, loggedUser]);

    return (
        userData &&
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={WeekendOutlinedIcon} title="eatWell favourites" type="eatWell" favourites={userData.favourites.recipes} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={WeekendOutlinedIcon} title="restWell favourites" type="restWell" favourites={userData.favourites.activities} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={WeekendOutlinedIcon} title="thinkWell favourites" type="thinkWell" favourites={userData.favourites.ideas} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={WeekendOutlinedIcon} title="fitWell favourites" type="fitWell" favourites={userData.favourites.exercises} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FavouritesPage
