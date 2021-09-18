import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import FavouritesExpandableCard from './FavouritesExpandableCard';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';

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

    return (
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={WeekendOutlinedIcon} title="eatWell favourites" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={WeekendOutlinedIcon} title="eatWell favourites" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={WeekendOutlinedIcon} title="eatWell favourites" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FavouritesExpandableCard cardIcon={WeekendOutlinedIcon} title="eatWell favourites" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FavouritesPage
