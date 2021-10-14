import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: '100%'
  },
});



// function createData(id, ingredient, quantity, measure) {
//   return { id, ingredient, quantity, measure};
// }

// const rows = [
// //   createData('Amount', '159 kcal', '6.0 g', '24 g', '4.0 g'),
// //   createData('Daily coverage (%)', 237, 9.0, 37, 4.3),  
// ];

export default function IngredientsTable({ingredients}) {
  const classes = useStyles();

  console.log(ingredients);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right">{row.ingredient}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.measure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}