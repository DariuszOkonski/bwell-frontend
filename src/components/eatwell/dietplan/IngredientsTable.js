import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DietPlanContext } from './context/DietPlanContext';
import { eatWell } from '../../../utilities/BackendRequests';
import { v4 } from 'uuid';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    marginTop: "1rem",
    width: '100%'
  },
});

export default function IngredientsTable() {
  const classes = useStyles();

  const { selectedMeal } = useContext(DietPlanContext)
  


  return (
    <TableContainer component={Paper}>
      
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><h3>Name</h3></TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedMeal && selectedMeal.ingrDetails ? selectedMeal.ingrDetails.map((row) => (
            <React.Fragment key={v4()}>
              <TableRow key={v4(234)}>
                <TableCell align="right">{row.ingredient.name}</TableCell>
                <TableCell align="right">{row.ingredient.amount}</TableCell>
                <TableCell align="right"> {row.ingredient.unit}</TableCell>
                
              </TableRow>
              {
                selectedMeal.withNutrients && row.nutrients.map(nutr => (
                <TableRow key={v4(23432)}>
                  <TableCell></TableCell>
                  <TableCell align="left">{nutr.name}:</TableCell>
                  <TableCell align="left">{nutr.amount} {nutr.unit}</TableCell>
                </TableRow>
                ))
              }
              
            </React.Fragment>
          )) : 
            <TableRow>
              <TableCell><h4> Nothing selected </h4></TableCell>
            </TableRow>
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}