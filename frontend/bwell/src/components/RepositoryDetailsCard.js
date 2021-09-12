import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import { colors, viewportSize } from '../utilities/utilities';
import { Grid } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';



const useStyles = makeStyles({
  card: {
    border: `2px solid ${colors.borderPrimary}`,
    backgroundColor: colors.white,
    padding: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden'
  },
  cardDescriptionIcon: {
    position: 'relative',
    top: '15px',
    marginRight: '1em',
    // fontSize: '6rem',
    '& svg': {
      fontSize: '6rem'
    },
    color: colors.cardIconPrimary,
  },
  thumbUp: {
    fontSize: 56,
    marginRight: '0.5em',
    color: colors.thumbUp,
  },
  thumbDown: {
    fontSize: 56,
    marginRight: '0.5em',
    color: colors.thumbDown,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    color: colors.textPrimary,
  },
  inline: {
    display: 'inline-block'
  },
  descriptionOutlined: {
    border: `1px solid ${colors.borderPrimary}`,
    backgroundColor: colors.white,
    padding: '1rem',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    marginBottom: '1em'
  },
  description: {
    fontSize: '1rem',
    color: colors.textSecondary,
  },
  checkButton: {
    alignSelf: 'flex-end',
    textTransform: 'none',
    border: 'none',
    minWidth: '200px',
    backgroundColor: colors.buttonPrimary,
    '&:hover': {
      backgroundColor: colors.buttonPrimaryHover,
    },
    borderRadius: '2rem',
    color: colors.white,
    padding: '0.2rem 0.6rem',
    fontSize: '1rem',
    [`@media (max-width: ${viewportSize.mobileL})`]: {
      fontSize: '0.6rem'
    },
    marginRight: '0.5rem',
  },
  buttonContainer: {
    justifyContent: 'center'
  }
})

const LightbulbIcon = <EmojiObjectsOutlinedIcon />;


const RepositoryDetailsCard = (props) => {
  const classes = useStyles();

  const CardIcon = () => {
    switch(props.cardIcon){
      case 'restWell':
        return <WeekendOutlinedIcon/>;
      case 'thinkWell':
        return LightbulbIcon;
      default:
        return 'none'
    }
  };
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <Grid container className={classes.card} spacing={3}>
      <Grid item container spacing={2} className={classes.header}>
        <Grid item>
          <span className={classes.cardDescriptionIcon}>
            <CardIcon />
          </span>
          <Typography variant="h3" className={classes.inline}>{props.title}</Typography>
        </Grid>
        <Grid item>
          <ThumbUpOutlinedIcon className={classes.thumbUp} /><ThumbDownOutlinedIcon className={classes.thumbDown} />
        </Grid>
      </Grid>
      <Grid item className={classes.descriptionOutlined}>

        <p className={classes.description}>{props.description}</p>

      </Grid>
      <Grid item className={classes.descriptionOutlined}>
        <p className={classes.description}>{props.description}</p>
      </Grid>
      <Grid item container className={classes.buttonContainer}>
        <Button onClick={goBack} variant="outlined" endIcon={<ArrowBack />} className={classes.checkButton} text="check">Back</Button>
        <Button component={Link} to={props.linkTo} variant="outlined" endIcon={<AssignmentReturnedIcon />} className={classes.checkButton} text="check">Add to favourites</Button>
      </Grid>
    </Grid>
  );
}

// RepositoryDetailsCard.propTypes = {
//   cardIcon: PropTypes.string
// };

export default RepositoryDetailsCard;