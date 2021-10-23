import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { colors } from '../../utilities/utilities';


function createData(calories, fat, carbs, protein) {
  return {calories, fat, carbs, protein };
}

const rows = [
  createData('159 kcal', '6 g', '24 g', '4.0 g'),
  createData( "23%", "9%"," 31%", "10%"),  
];

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
  const classes = useStyles();

  return (
    // <TableContainer component={Paper}>
      <table className={classes.table}>
        <thead>
          <th className={classes.th}>
            <td className={classes.td} >Energy</td>
            <td className={classes.td} >Fat</td>
            <td className={classes.td} >Carbs</td>
            <td className={classes.td} >Protein</td>
          </th>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className={classes.tr} key={row.name}>
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