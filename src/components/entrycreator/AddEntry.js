import {  makeStyles } from '@material-ui/core'
import React from 'react'
import { useRouteMatch } from 'react-router'
import { viewportSize } from '../../utilities/utilities'
import EntryPageContainer from '../reuseable/EntryPageContainer'
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs'
import AddEntryForm from './AddEntryForm'
import EntryPreview from './EntryPreview'

const AddEntry = () => {

    const {path} = useRouteMatch()
    

    const useStyles = makeStyles({
        content: {
            display: 'flex',
            flexDirection: "column",
            // minHeight: "100vh",
            // margin: '0 auto',
            [`@media (min-width: ${viewportSize.tabletS})`] : {
                flexDirection: "row",
            },
        },
        part: {
            width: '95%',
            [`@media (min-width: ${viewportSize.mobileL})`] : {
                width: '97%',
            },
            [`@media (min-width: ${viewportSize.tabletS})`] : {
                width: '100%',
            },
            margin: '0.5rem 0.5rem',
            // padding: '0.25rem'
        },
        simpleBreadcrubmContainer: {
            padding: '0 0.5rem',
            // width: '90%'
        }
    })


    const classes = useStyles()
    return (
        
        <EntryPageContainer size={viewportSize.laptop}>
            <div className={classes.simpleBreadcrubmContainer}>
                <SimpleBreadcrumbs path={path}/>
            </div>
            <div className={classes.content}>

                <div className={classes.part}>
                    
                    <AddEntryForm/>
                </div>
                <div className={classes.part}>

                    <EntryPreview />

                </div>
            </div>
        </EntryPageContainer>
    )
}

export default AddEntry
