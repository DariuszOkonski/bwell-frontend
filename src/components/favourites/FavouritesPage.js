import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import FavouritesExpandableCard from './FavouritesExpandableCard';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import { useEffect, useState } from 'react';
import { endpoints, modules } from '../../utilities/utilities';
import { favourites } from '../../utilities/BackendRequests';
import UserService from '../../utilities/UserService';

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

export const FavouritesContext = React.createContext();

const FavouritesPage = (props) => {
    let loggedUser;
    const classes = useStyles();

    const APIurl = endpoints.APIhost + endpoints.APIusers;

    const [userData, setUserData] = useState(null);

    const [pageChangedEvent, setPageChangedEvent] = useState();

    useEffect(() => {

        const fetchFavourites = async () => {
             loggedUser = await UserService();
debugger
            return await favourites.fetchUserData(loggedUser); 
        }

        const getIdeas = async () => {
            const userData = await fetchFavourites()
            setUserData(userData)
        }
        getIdeas()

        
    },[APIurl, pageChangedEvent]);

    return (
        userData &&
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        <FavouritesContext.Provider value={setPageChangedEvent}>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={modules.eatWell.icon} title="eatWell favourites" type="eatWell" favourites={userData.favourites.recipes} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={modules.restWell.icon} title="restWell favourites" type="restWell" favourites={userData.favourites.activities} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={modules.thinkWell.icon} title="thinkWell favourites" type="thinkWell" favourites={userData.favourites.ideas} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={modules.fitWell.icon} title="fitWell favourites" type="fitWell" favourites={userData.favourites.exercises} />
                        </Grid>
                        </FavouritesContext.Provider>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FavouritesPage
