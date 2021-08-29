import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import zIndex from '@material-ui/core/styles/zIndex';

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
      justifyContent: 'flex-end'
    },
    overlap: {
      marginLeft: '-15%',
      zIndex: '2',
      textAlign: 'start'
    },
    gridPositioning: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gridTemplateRows: '30% 1fr'
    },
    cardDescription: {
      gridColumn: '2',
      gridRow: '2',
      textAlign: 'justify'
    }
  });

const MainCard = (props) => {
    const classes = useStyles();

    return (
      <>
        <Card className={classes.root} variant="outlined">
      <CardContent className={classes.gridPositioning}>
        <img src={props.image} className={classes.cardImage} />
        <Typography variant="h3" component="h2" className={classes.overlap}>
          {props.menuTitle}
        </Typography>
        <Typography variant="body2" className={classes.cardDescription}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.checkButton}>
        <Button size="small">#CheckButton</Button>
      </CardActions>
    </Card>
    </>
    )
}

export default MainCard
