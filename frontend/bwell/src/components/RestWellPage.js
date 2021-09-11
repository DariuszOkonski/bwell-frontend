import React from 'react'
import PersistentDrawerLeft from './Menu'
import { Grid, makeStyles } from '@material-ui/core'
import CategoriesBar from './CategoriesBar'
import RepositoryCard from './RepositoryCard';
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


const RestWellPage = (props) => {
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <PersistentDrawerLeft
                // openMenu={props.openMenu} 
                // handleCloseMenu={props.handleCloseMenu}
                />
            </Grid>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                    <CategoriesBar location="restWell/Repositories" />
                </Grid>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Relax idea" cardIcon={WeekendOutlinedIcon} linkTo="/restWell/1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Relax idea" cardIcon={WeekendOutlinedIcon} linkTo="/restWell/2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Relax idea" cardIcon={WeekendOutlinedIcon} linkTo="/restWell/3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Relax idea" cardIcon={WeekendOutlinedIcon} linkTo="/restWell/4" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Relax idea" cardIcon={WeekendOutlinedIcon} linkTo="/restWell/5" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RepositoryCard title="Relax idea" cardIcon={WeekendOutlinedIcon} linkTo="/restWell/6" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default RestWellPage
