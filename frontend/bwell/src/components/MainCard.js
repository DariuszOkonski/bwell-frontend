import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import CustomButton from './CustomButton';
import { colors, viewportSize } from '../utilities/utilities';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    border: `2px solid ${colors.borderPrimary}`,
    backgroundColor: colors.white,
    padding: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden'
  },
  img: {
    position: 'relative',
    top: '0',
    left: '0',
    minWidth: '50px',
    maxWidth: '150px',
    zIndex: 1,
    [`@media (max-width: ${viewportSize.mobileL})`]: {
      maxWidth: '110px'
    }
  },
  headerContainer: {
    position: 'absolute',
    top: '-25px',
    left: '90px',
    padding: '1rem',
    paddingTop: '3rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 10,
    width: '100%',
    borderBottomLeftRadius: '4rem'
  },
  header: {
    fontSize: '36px',
    color: colors.textPrimary,
    margin: '0',
    padding: '0',
    paddingLeft: '0.5rem',
    [`@media (max-width: ${viewportSize.mobileL})`] : {
      fontSize: '1.5rem'
    }
  },
  description: {
    position: 'absolute',
    top: '80px',
    left: '170px',
    width: '60%',
    fontSize: '1rem',
    whiteSpace: 'pre-wrap',
    color: colors.textSecondary,
    zIndex: 11,
    padding: '0',
    margin: '0.2rem',
    [`@media (max-width: ${viewportSize.mobileL})`] :{
      top: '60px',
      left: '140px',
      fontSize: '0.8rem',
      margin: '0',
    }
  }
})

const MainCard = (props) => {
  const classes = useStyles();

  return (  
    <div className={classes.card}>
      <img src={props.image} className={classes.img} />

      <div className={classes.headerContainer}>
        <h2 className={classes.header}>{props.menuTitle}</h2>
      </div>

      <p className={classes.description}>{props.description}</p>

      <CustomButton linkTo={props.linkTo} text="check"/>

      {/* <Button component={Link} to={props.linkTo} className={classes.button} variant="outlined" endIcon={<AssignmentReturnedIcon />}>
        Check
      </Button> */}
    </div>
  );
}
 
export default MainCard;

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   cardImage: {
//     position: 'relative',
//     borderRadius: '50%',
//     gridRow: '1 / 3'
//   },
//   checkButton: {
//     justifyContent: 'flex-end',
//     color: '#FF934F',
//   },
//   overlap: {
//     marginLeft: '-15%',
//     zIndex: '2',
//     textAlign: 'start',
//     gridColumn: '2',
//     gridRow: '1'
//   },
//   gridPositioning: {
//     display: 'grid',
//     gridTemplateColumns: '200px 1fr',
//     gridTemplateRows: '40% 1fr'
//   },
//   cardDescription: {
//     gridColumn: '2',
//     gridRow: '2',
//     textAlign: 'justify'
//   },
//   fadedBackground: {
//     backgroundColor: 'rgba(255, 255, 255, 0.80)',
//     borderRadius: '0px 0px 0px 10%',
//     padding: '0.5em'
//   }
// });

// const MainCard = (props) => {
//   const classes = useStyles();

//   return (
//     <>
//       <Card className={classes.root} variant="outlined">
//         <CardContent className={classes.gridPositioning}>
//           <img src={props.image} className={classes.cardImage} />
//           <Box className={classes.overlap}>
//             <Box className={classes.fadedBackground}>
//               <Typography variant="h3" component="h2">
//                 {props.menuTitle}
//               </Typography>
//             </Box>
//           </Box>
//           <Typography variant="body2" className={classes.cardDescription}>
//             {props.description}
//           </Typography>
//         </CardContent>
//         <CardActions className={classes.checkButton}>
//           <Button component={Link} to={props.linkTo} variant="outlined" endIcon={<AssignmentReturnedIcon />} className={classes.checkButton}>Check</Button>
//         </CardActions>
//       </Card>
//     </>
//   )
// }

// export default MainCard
