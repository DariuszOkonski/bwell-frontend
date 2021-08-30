import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import zIndex from '@material-ui/core/styles/zIndex';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import { SportsRugbySharp } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardImage: {
    position: 'relative',
    borderRadius: '50%',
    gridRow: '1 / 3'
  },
  checkButton: {
    justifyContent: 'flex-end',
    color: '#FF934F',
  },
  overlap: {
    marginLeft: '-15%',
    zIndex: '2',
    textAlign: 'start',
    gridColumn: '2',
    gridRow: '1'
  },
  gridPositioning: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    gridTemplateRows: '40% 1fr'
  },
  cardDescription: {
    gridColumn: '2',
    gridRow: '2',
    textAlign: 'justify'
  },
  fadedBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    borderRadius: '0px 0px 0px 10%',
    padding: '0.5em'
  }
});

const MainCard = (props) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.gridPositioning}>
          <img src={props.image} className={classes.cardImage} />
          <Box className={classes.overlap}>
            <Box className={classes.fadedBackground}>
              <Typography variant="h3" component="h2">
                {props.menuTitle}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" className={classes.cardDescription}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.checkButton}>
          <Button variant="outlined" endIcon={<AssignmentReturnedIcon />} className={classes.checkButton}>Check</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default MainCard
