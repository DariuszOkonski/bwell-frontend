import { ClickAwayListener, makeStyles } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import React, { useContext, useState } from 'react'
import { viewportSize } from '../../utilities/utilities'
import EntryPageContainer from '../reuseable/EntryPageContainer'
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs'
import AddEntryForm from './AddEntryForm'
import EntryCreatorContextProvider, { EntryCreatorContext }  from './contexts/EntryCreatorContext'
import EntryPreview from './EntryPreview'

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

    const {title, ingredients, customLists } = useContext(EntryCreatorContext)


    const classes = useStyles()
    return (
        
        <EntryPageContainer>
            <div className={classes.simpleBreadcrubmContainer}>
                <SimpleBreadcrumbs path="/addentry"/>
            </div>
            <div className={classes.content}>

                <div className={classes.part}>
                    <AddEntryForm/>
                </div>
                <div className={classes.part}>

                    {/* TODO - new component */}
                    {/* <h3>{title}</h3>
                    <ul style={{backgroundColor: 'white', padding: '2rem'}}>
                        {
                            ingredients.map(item => 
                                item.ingredient && <li key={item.id}>
                                    {item.ingredient} - {item.quantity} - {item.measure}
                                </li>)
                        }
                    </ul> */}

                    <EntryPreview />

                </div>
            </div>
        </EntryPageContainer>
    )
}

export default AddEntry
