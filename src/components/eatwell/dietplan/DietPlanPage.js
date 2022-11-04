import React, { useContext, useEffect, useState } from 'react';
import { colors, viewportSize } from '../../../utilities/utilities';
import { useRouteMatch } from 'react-router'
import EntryPageContainer from '../../reuseable/EntryPageContainer'
import SimpleBreadcrumbs from '../../reuseable/SimpleBreadcrumbs'
import { Grid, makeStyles } from '@material-ui/core';
import { EntryContainer } from '../../reuseable/EntryContainer';
import DietPlanRecipesAccordion from '../../reuseable/SimpleAccordion';
import IngredientsTable from './IngredientsTable';
import DietStatistics from '../DietStatistics';
import { eatWell } from '../../../utilities/BackendRequests';
import { DietPlanContext } from './context/DietPlanContext';
import EventButton from '../../reuseable/EventButton';

const DietPlanPage = () => {

    const useStyles = makeStyles({
        content: {
            display: 'flex',
            flexDirection: "column",
            [`@media (min-width: ${viewportSize.laptop})`] : {
                flexDirection: "row",
            },
            color: colors.textPrimary
        },
        part: {
            width: '95%',
            [`@media (min-width: ${viewportSize.mobileL})`] : {
                width: '97%',
                
            },
            [`@media (min-width: ${viewportSize.laptop})`] : {
                width: '100%',
            },
            margin: '0.5rem 0.5rem',
            // padding: '0.25rem'
        },
        simpleBreadcrubmContainer: {
            padding: '0 0.5rem',
            // width: '90%'
        },
        buttonsContainer:{
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            width: "60%"
        }
    })
    const {path} = useRouteMatch()
    const {demand, income, setDemand} = useContext(DietPlanContext)

    const [statistics, setStatistics] = useState({})
    const [clickedButton, setClickedButton] = useState({
        demand: true,
        income: false
    })
    // 

    const handleClick = () => { 
        if (clickedButton.demand){
            setStatistics(income)
        } else {
            setStatistics(demand)
        }
        setClickedButton({
            demand: !clickedButton.demand,
            income: !clickedButton.income,
        })
    }

    useEffect(() => {
        const getStatistics = async () => {
            const fromServer = await eatWell.fetchGetUserCalculatorData()
            setStatistics(fromServer)
            setDemand(fromServer)
        }
        getStatistics()
    }, [])
    const classes = useStyles()

    return ( 
        <EntryPageContainer size={viewportSize.laptop}>
            <div className={classes.simpleBreadcrubmContainer}>
                <SimpleBreadcrumbs path={path}/>
            </div>
            {
            statistics && 
            <EntryContainer>
                <DietStatistics statistics={statistics} demand={clickedButton.demand}></DietStatistics>
                <div className={classes.buttonsContainer}>
                    <EventButton text="Show demand" isClicked={clickedButton.demand} isAbsolute={false} callback={handleClick}/>
                    <EventButton text="Show income" isClicked={clickedButton.income} isAbsolute={false} callback={handleClick}/>
                </div>

            </EntryContainer>
            }
            <div className={classes.content}>

                <div className={classes.part}>
                    <EntryContainer>
                        
                        <IngredientsTable/>

                    </EntryContainer>
                </div>
                <div className={classes.part}>
                        <DietPlanRecipesAccordion />


                </div>
            </div>
        </EntryPageContainer>
     );
}
 
export default DietPlanPage;