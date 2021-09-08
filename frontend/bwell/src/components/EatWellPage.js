import React from 'react'
import PersistentDrawerLeft from './Menu'
import { Grid, makeStyles } from '@material-ui/core'
import CategoriesBar from './CategoriesBar'
import RepositoryCard from './RepositoryCard';
import { ThumbUpOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    categoriesBar: {
        justifyContent: "center",
        marginTop: "1rem"
    },
    spacearound: {
        justifyItems: 'space-around'
    },
    cards: {
        justifyContent: 'center',
        margin: '0'
    }
}));


const EatWellPage = (props) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
            <Grid item xs={12} md={8}>
                <CategoriesBar location="eatWell/Repositories" />
            </Grid>
            <Grid item className={classes.cards} xs={12} md={8}>
                <Grid container xs={12} spacing={2} className={classes.cards}>
                    <Grid item xs={12} md={6}>
                        <RepositoryCard title="Recipe" cardIcon={ThumbUpOutlined} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RepositoryCard title="Recipe" cardIcon={ThumbUpOutlined} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RepositoryCard title="Recipe" cardIcon={ThumbUpOutlined} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RepositoryCard title="Recipe" cardIcon={ThumbUpOutlined} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RepositoryCard title="Recipe" cardIcon={ThumbUpOutlined} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RepositoryCard title="Recipe" cardIcon={ThumbUpOutlined} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EatWellPage
