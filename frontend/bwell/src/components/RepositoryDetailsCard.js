import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import { colors, viewportSize } from '../utilities/utilities';
import { Grid } from '@material-ui/core';
import PropTypes from "prop-types";


const useStyles = makeStyles({
  card: {
    position: 'relative',
    border: `2px solid ${colors.borderPrimary}`,
    backgroundColor: colors.white,
    padding: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden'
  },
  cardIcon: {
    fontSize: 70,
    position: 'relative',
    marginRight: '1em',
    color: colors.cardIconPrimary,
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
    [`@media (max-width: ${viewportSize.mobileL})`]: {
      fontSize: '1.5rem'
    }
  },
  inline: {
    display: 'inline'
  },
  description: {
    fontSize: '1rem',
    color: colors.textSecondary,
    zIndex: 11,
    padding: '0',
    margin: '0.2rem',
    [`@media (max-width: ${viewportSize.mobileL})`]: {
      top: '60px',
      left: '140px',
      fontSize: '0.8rem',
      margin: '0',
    }
  },
  checkButton: {
    alignSelf: 'flex-end',
    color: '#FF934F',
    border: 'none',
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
    justifyContent: 'flex-end'
  }
})

const RepositoryDetailsCard = (props) => {
  const classes = useStyles();
  const CardIcon = props.cardIcon;

  return (
    <Grid container className={classes.card}>
      <Grid item>
        <CardIcon className={classes.cardIcon} spacing={2} />
        <Typography variant="h4" className={classes.inline}>{props.title}</Typography>
      </Grid>
      <Grid item>
        <p className={classes.description}>{props.description}</p>
      </Grid>
      <Grid item container spacing={2} className={classes.buttonContainer} spacing={1}>
        <Button component={Link} to={props.linkTo} variant="outlined" endIcon={<AssignmentReturnedIcon />} className={classes.checkButton} text="check">Add to favourite</Button>
        <Button component={Link} to={props.linkTo} variant="outlined" endIcon={<AssignmentReturnedIcon />} className={classes.checkButton} text="check">Back</Button>
      </Grid>
    </Grid>
  );
}

RepositoryDetailsCard.propTypes = {
  cardIcon: PropTypes.elementType
};

export default RepositoryDetailsCard;