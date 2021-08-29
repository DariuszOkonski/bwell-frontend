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
      borderRadius: '50%'
    },
    checkButton: {
      justifyContent: 'flex-end'
    },
    cardHeader: {
      display: 'flex',
      flexDirection: 'row'
    },
    overlap: {
      marginLeft: '-8%',
      zIndex: '2',
      width: '100%'
    }
  });

const MainCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Box component="div" className={classes.cardHeader}>
        <img src={props.image} className={classes.cardImage} />
        <Typography variant="h3" component="h2" className={classes.overlap}>
          {props.menuTitle}
        </Typography>
        <Typography variant="body2" component="span">
          {props.description}
        </Typography>
        </Box>
      </CardContent>
      <CardActions className={classes.checkButton}>
        <Button size="small">#CheckButton</Button>
      </CardActions>
    </Card>
    )
}

export default MainCard
