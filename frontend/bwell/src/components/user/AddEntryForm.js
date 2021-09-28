import { makeStyles } from '@material-ui/core'
import React from 'react'
import { EntryContainer } from '../reuseable/EntryContainer'
import { viewportSize, colors } from '../../utilities/utilities'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EventButton from '../reuseable/EventButton'
import { EntryHeader } from '../reuseable/EntryHeader'
import { EventNote } from '@material-ui/icons';


const AddEntryForm = () => {
    const useStyles = makeStyles({
        headerContainer: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '0.8rem 0'
        },
        moduleDropdown: {
            display: "flex",
            justifyContent: "flex-end",
        },
        select: {
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.2rem",
            padding: "0.2rem",
            color: `${colors.textSecondary}`,
            fontSize: '1.2rem'
        },
        titleInput: {
            border: `1px solid ${colors.borderPrimary}`,
            borderRadius: "0.2rem",
            padding: "0.4rem",
            color: `${colors.textPrimary}`,
        },
        titleDiv: {
            flexGrow: "1",
            color: `${colors.textPrimary}`,
        },
        icon: {
            width: "3rem",
            marginRight: "1rem",
            color: `${colors.cardIconPrimary}`,
            '& svg' : {
                width: '100%', 
                height: '100%'
            },
            [`@media (min-width: ${viewportSize.tablet})`] : {
                width: '4.5rem'
              }
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "space-evenly"
        }
    })
    
    const classes = useStyles()
    return (
        <EntryContainer>
            <div className={classes.moduleDropdown}>
                <label >
                    <select 
                        className={classes.select}
                    >
                        <option className={classes.option} value="eatWell">eatWell</option>
                        <option className={classes.option} value="fitWell">fitWell</option>
                        <option className={classes.option} value="restWell">restWell</option>
                        <option className={classes.option} value="thinkWell">thinkWell</option>
                    </select>
                </label>
            </div>
            <div className={classes.headerContainer}>
                <div className={classes.icon}>

                    <RestaurantIcon/>
                </div>

                <div className={classes.titleDiv}>
                    <input className={classes.titleInput} type="text" placeholder="title" value="Entry title"/>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                    <EventButton text="Add text" callback={() => console.log("new text cnt")} isAbsolute={false}/>
                    <EventButton icon={<EventNote/>} text="Add list" callback={() => console.log("new list cnt")} isAbsolute={false}/>
            </div>
        </EntryContainer>
    )
}

export default AddEntryForm
