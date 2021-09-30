import { ClickAwayListener, makeStyles } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import React from 'react'
import { viewportSize } from '../../utilities/utilities'
import EntryPageContainer from '../reuseable/EntryPageContainer'
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs'
import AddEntryForm from './AddEntryForm'

const AddEntry = () => {
    const useStyles = makeStyles({
        content: {
            display: 'flex',
            flexDirection: "column",
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
        <EntryPageContainer>
            <div className={classes.simpleBreadcrubmContainer}>
                <SimpleBreadcrumbs path="/addentry"/>
            </div>
            <div className={classes.content}>

                <div className={classes.part}>
                    <AddEntryForm />
                </div>
                <div className={classes.part}>
                    <AddEntryForm/>
                </div>
            </div>
        </EntryPageContainer>            
    )
}

export default AddEntry
