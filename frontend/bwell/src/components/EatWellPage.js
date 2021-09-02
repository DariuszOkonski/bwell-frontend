import React from 'react'
import PersistentDrawerLeft from './Menu'
import { Grid } from '@material-ui/core'


const EatWellPage = (props) => {
    return (
        <Grid container>
            <PersistentDrawerLeft 
                // openMenu={props.openMenu} 
                // handleCloseMenu={props.handleCloseMenu}
            />
        </Grid>
    )
}

export default EatWellPage
