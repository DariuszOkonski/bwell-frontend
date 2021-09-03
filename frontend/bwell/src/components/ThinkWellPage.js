import React from 'react'
import PersistentDrawerLeft from './Menu'
import { Grid, makeStyles } from '@material-ui/core'
import CategoriesBar from './CategoriesBar'
import RepositoryCard from './RepositoryCard';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

const useStyles = makeStyles((theme) => ({
    categoriesBar: {
        justifyContent: "flex-end",
        marginTop: "1rem"
    },
    spacearound: {
        justifyItems: 'space-around'
    }
}));


const ThinkWellPage = (props) => {
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
                <Grid item xs={12} md={10}>
                    <CategoriesBar location="thinkWell/Repositories" />
                </Grid>
                <Grid container xs={12} md={10} spacing={2} className={classes.spacearound}>
                    <Grid item xs={12} md={5}>
                        <RepositoryCard title="Relax idea" cardIcon={EmojiObjectsOutlinedIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <RepositoryCard title="Relax idea" cardIcon={EmojiObjectsOutlinedIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <RepositoryCard title="Relax idea" cardIcon={EmojiObjectsOutlinedIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <RepositoryCard title="Relax idea" cardIcon={EmojiObjectsOutlinedIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <RepositoryCard title="Relax idea" cardIcon={EmojiObjectsOutlinedIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <RepositoryCard title="Relax idea" cardIcon={EmojiObjectsOutlinedIcon} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ThinkWellPage
