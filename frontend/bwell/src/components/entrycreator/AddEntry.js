import { ClickAwayListener, makeStyles } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import React, { useContext, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { viewportSize } from '../../utilities/utilities'
import EntryPageContainer from '../reuseable/EntryPageContainer'
import SimpleBreadcrumbs from '../reuseable/SimpleBreadcrumbs'
import AddEntryForm from './AddEntryForm'
import EntryCreatorContextProvider, { EntryCreatorContext }  from './contexts/EntryCreatorContext'
import EntryPreview from './EntryPreview'

const AddEntry = () => {

    const {path} = useRouteMatch()
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

    const { ingredientsLists, textAreas } = useContext(EntryCreatorContext)

    const [content, setContent] = useState([])
    
    const getCurrentContent = () => {
        const content = [...ingredientsLists, ...textAreas]
        content.sort((a, b) => a.order - b.order)

        return content;
    }

    useEffect(() => {
        setContent(getCurrentContent())
    }, [ingredientsLists, textAreas])

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
