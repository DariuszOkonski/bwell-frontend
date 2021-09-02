import React from 'react'
import PersistentDrawerLeft from './Menu'
import { Grid, makeStyles } from '@material-ui/core'
import CategoriesBar from './CategoriesBar'

const useStyles = makeStyles((theme) => ({
    categoriesBar: {
        justifyContent: "flex-end",
        marginTop: "1rem"
    }
}));


const EatWellPage = (props) => {
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
                <CategoriesBar location="eatWell/Repositories" />
            </Grid>
        </Grid>
        </>
    )
}

export default EatWellPage
