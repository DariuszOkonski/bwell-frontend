import { makeStyles } from '@material-ui/core'
import React from 'react'
import { EntryContainer } from '../reuseable/EntryContainer'
import { EntryHeader } from '../reuseable/EntryHeader'
import { viewportSize, colors } from '../../utilities/utilities'
import RestaurantIcon from '@material-ui/icons/Restaurant';


const AddEntryForm = () => {
    const useStyles = makeStyles({
        container: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '0.8rem 0'
        },
        title: {
            flexGrow: "1",
            color: `${colors.textPrimary}`,
            fontSize: "1.25rem",
            [`@media (min-width: ${viewportSize.mobileL})`] : {
                fontSize: '1.625rem'
              },
            fontWeight: "400"
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
                width: '6rem'
              }
        },
    })
    
    const classes = useStyles()
    return (
        <EntryContainer>
            <div>
                <label>
                    <select 
                    
                    >
                        <option value="eatWell">eatWell</option>
                        <option value="fitWell">fitWell</option>
                        <option value="restWell">restWell</option>
                        <option value="thinkWell">thinkWell</option>
                    </select>
                </label>
            </div>
            <div className={classes.container}>
            <div className={classes.icon}>

                <RestaurantIcon/>
            </div>

            <h3 className={classes.title}>
                <input type="text" placeholder="title" value="Entry title"/>
            </h3>
        </div>
        </EntryContainer>
    )
}

export default AddEntryForm
