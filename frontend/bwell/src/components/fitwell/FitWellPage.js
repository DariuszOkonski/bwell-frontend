import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import CategoriesBar from '../reuseable/CategoriesBar'
import RepositoryCard from '../reuseable/RepositoryCard';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

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

    return (
        <>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                    <CategoriesBar location="fitWell/Repositories" />
                </Grid>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
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
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Activity" cardIcon={DirectionsBikeIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FitWellPage
