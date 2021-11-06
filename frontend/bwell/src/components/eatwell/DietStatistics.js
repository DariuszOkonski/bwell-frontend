import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import { AccessibilityNew } from '@material-ui/icons';
import { colors, viewportSize } from '../../utilities/utilities';

const DietStatistics = ({statistics}) => {
    const useStyles = makeStyles({
        container: {
            display: 'flex',
            [`@media (max-width: ${viewportSize.mobileL})`] : {
                flexDirection: 'column'
              }
        },
        iconContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
            
        },
        tr: {
            display: "flex",
            // margin: "0.1rem",
            justifyContent: "center",
            width: "100%"
        },
        th: {
            backgroundColor: colors.buttonPrimary,
            color: "white",
            textAlign: "center",
            width: "33%",
            padding: "0.4rem",
            margin: " 0.1rem",
        },
        td: {
            width: "33%",
            padding: "0.4rem",
            margin: "0.1rem",
            backgroundColor: "white",

            textAlign: "center"
        },
        icon: {
            fontSize: '6rem',
            color: colors.thumbUp
        },
        text: {
            fontSize: '1.5rem',
            color: colors.textPrimary,
            // margin: '1rem 0'
        },
        table:{ 
            width: "100%",
            padding: ".1rem",
            display: "flex",
            backgroundColor: "gray",
            borderRadius: "0.5rem",
            border: "1px gray solid",
            flexDirection: "column"
        }
    })
    
    const rendering = () => statistics && 
        <table className={classes.table}>
            <tr className={classes.tr }>
                <th className={classes.th}>Nutrient</th>
                <th className={classes.th}>Amount</th>
                <th className={classes.th}>Calories coverage</th>
            </tr>
            <tr className={classes.tr}>
                <th className={classes.td}>Calories</th>
                <td className={classes.td}>{Math.round(statistics.caloriesDemand)} kcal</td>
                <td className={classes.td}>{Math.round(statistics.caloriesPercentage*100)}%</td>
            </tr>
            
            <tr className={classes.tr}>
                <th className={classes.td}>Protein</th>
                <td className={classes.td}>{Math.round(statistics.proteinDemand)} g</td>
                <td className={classes.td}>{Math.round(statistics.proteinPercentage*100)}%</td>
            </tr>
            
            <tr className={classes.tr}>
                <th className={classes.td}>Fat</th>
                <td className={classes.td}>{Math.round(statistics.fatDemand)} g</td>
                <td className={classes.td}>{Math.round(statistics.fatPercentage*100)}%</td>
            </tr>
            
            <tr className={classes.tr}>
                <th className={classes.td}>Carbohydrates</th>
                <td className={classes.td}>{Math.round(statistics.carbohydratesDemand)} g</td>
                <td className={classes.td}>{Math.round(statistics.carbohydratesPercentage*100)}%</td>
            </tr>
        </table>
    const classes = useStyles();
    useEffect(() => {
    }, [statistics])
    console.log(statistics)
    return (
        <div className={classes.container}>
            <div className={classes.iconContainer}>
                <AccessibilityNew className={classes.icon}/>                
            </div>
                {rendering()}
        </div>
    )
}

export default DietStatistics
