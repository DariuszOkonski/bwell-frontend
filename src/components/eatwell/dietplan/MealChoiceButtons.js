import { makeStyles } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { eatWell } from '../../../utilities/BackendRequests'
import UserService from '../../../utilities/UserService'
import { dietPlanUrls } from '../../../utilities/utilities'
import EventButton from '../../reuseable/EventButton'

const MealChoiceButtons = ({modalCloseCallback}) => {

    const useStyles = makeStyles({
        container: {
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.5rem"
        },
        btnContainer: {
            padding: "0.5rem",
            width: "80%",
            display: "flex",
        }
    })
    const classes = useStyles()
    const [userId, setUserId] = useState(0)
    useEffect(() => {
        // setRecipe(fake_getRecipe(Number(props.match.params.id)))
        const getUser = async () => {
            const userId = await UserService()
            setUserId(userId)
        }
        getUser()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const {params} = useRouteMatch()
    const handleClick = (meal) => {
        
        eatWell.setRecipeAsMeal(params.id, meal)
        modalCloseCallback()
    }
    return (
        <div>
            <h3>Choose meal for assignment</h3>
            <div className={classes.container}>

            {Object.keys(dietPlanUrls.meals).map(mealName => {
                return<div className={classes.btnContainer}>
                <EventButton isAbsolute={false} callback={()=>handleClick(mealName)} text={mealName}/>
                </div>
            })}
            </div>

        </div>
    )
}

export default MealChoiceButtons
