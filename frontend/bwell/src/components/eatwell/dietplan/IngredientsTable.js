import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DietPlanContext } from './context/DietPlanContext';
import { Typography } from '@material-ui/core';

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
          {selectedMeal && selectedMeal.ingredients ? selectedMeal.ingredients.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.ingredient}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.measure}</TableCell>
            </TableRow>
          )) : <h4> Nothing selected </h4>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}