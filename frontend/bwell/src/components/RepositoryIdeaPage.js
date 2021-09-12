import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { useParams } from 'react-router';
import RepositoryTopBar from './RepositoryTopBar';
import RepositoryDetailsCard from './RepositoryDetailsCard';

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

    const classes = useStyles();
    let { id } = useParams();

    return (
        <>
            <Grid container>

                {/* <PersistentDrawerLeft 
            // openMenu={props.openMenu} 
            // handleCloseMenu={props.handleCloseMenu}
        /> */}
            </Grid>
            <Grid container spacing={2} xs={12} className={classes.categoriesBar}>
                <Grid item xs={12} md={8}>
                    <RepositoryTopBar text={props.repositoryType + "/idea " + id} />

                </Grid>
                <Grid item className={classes.cards} xs={12} md={8}>
                    <Grid container xs={12} spacing={2} className={classes.cards}>
                        <Grid item xs={12} md={8}>
                            <RepositoryDetailsCard title="Idea" cardIcon={props.repositoryType} linkTo="" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex." />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default RepositoryIdeaPage
