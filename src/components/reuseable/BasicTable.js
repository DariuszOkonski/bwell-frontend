import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { colors } from '../../utilities/utilities';
import { DietPlanContext } from '../eatwell/dietplan/context/DietPlanContext';
import { eatWell } from '../../utilities/BackendRequests';
import { v4 } from 'uuid';



export default function BasicTable({meal}) {
  
  const useStyles = makeStyles({
    table: {
      // minWidth: 650,
      minWidth: '100%',
      textAlign: "left",
      display: "flex",
      flexDirection: "column",

    },
    td: {
      width: "25%",
      padding: "1rem 0.5rem",
      textAlign: "center"
      // margin: "0.2rem"
      // padding: "2%",
      // width: "100%"
    },
    tr: {
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly"
    },
    th: {
      width: "100%",
      display: "flex",
      fontWeight: 600,
      justifyContent: "space-evenly",
      borderBottom: `1px solid ${colors.textSecondary}`
    }
  });

  const [rows, setRows] = useState([])

  const {setIncome, income} = useContext(DietPlanContext)

  function createData(calories, fat, carbs, protein) {
    return {calories, fat, carbs, protein };
  }
  
  useEffect(() => {
    const getRecipesNutrition = async () => {
      const nutrients = await eatWell.fetchRecipeNutritionSum(meal.id)
      const recipeCover = await eatWell.fetchGetUserCoverageForIngredients(meal.id)
      // setNutrition(nutrients)
      // setRecipeCoverage(recipeCover)
      setRows([
        createData(
          `${nutrients.calories.amount} ${nutrients.calories.unit}`, 
          `${nutrients.fat.amount} ${nutrients.fat.unit}`, 
          `${nutrients.carbohydrates.amount} ${nutrients.carbohydrates.unit}`, 
          `${nutrients.protein.amount} ${nutrients.protein.unit}`, 
          ),
        createData(
          `${Math.round(recipeCover.calories *100)} %`, 
          `${Math.round(recipeCover.fat * 100)} %`, 
          `${Math.round(recipeCover.carbohydrates * 100)} %`, 
          `${Math.round(recipeCover.protein * 100)} %`, 
          ),
      ])
    }
    if (meal.id){
      getRecipesNutrition()
      
    }

    }, [meal])

  const classes = useStyles();
  return (
    // <TableContainer component={Paper}>
      <table className={classes.table}>
        <thead>
          <tr className={classes.th}>
            <th className={classes.td} >Energy</th>
            <th className={classes.td} >Fat</th>
            <th className={classes.td} >Carbs</th>
            <th className={classes.td} >Protein</th>
          </tr>
        </thead>
        {/* <h2>{nutrition}</h2> */}
        <tbody>
          {rows && rows.map((row) => (
            <tr className={classes.tr} key={v4()}>
              <td className={classes.td} >{row.calories}</td>
              <td className={classes.td} >{row.fat}</td>
              <td className={classes.td} >{row.carbs}</td>
              <td className={classes.td} >{row.protein}</td>
            </tr>
          ))}
        </tbody>
      </table>
    // </TableContainer>
  );
}