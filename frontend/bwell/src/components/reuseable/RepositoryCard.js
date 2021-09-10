import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import { colors, viewportSize } from '../../utilities/utilities';
import { Grid } from '@material-ui/core';
import PropTypes from "prop-types";
import { Divider } from '@material-ui/core/Divider';
import CustomButton from './CustomButton';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    border: `2px solid ${colors.borderPrimary}`,
    backgroundColor: colors.white,
    padding: '1rem',
    margin: '0',
    borderRadius: '1rem',
    overflow: 'hidden'
  },
  cardIcon: {
    fontSize: '4rem',
    position: 'relative',
    marginRight: '1rem',
    color: colors.cardIconPrimary,
    [`@media (max-width: ${viewportSize.mobileL})`] : {
      fontSize: '2.5rem'
    }
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  // header: {
  //   fontSize: '36px',
  //   color: colors.textPrimary,
  //   margin: '0',
  //   padding: '0',
  //   paddingLeft: '0.5rem',
  //   [`@media (max-width: ${viewportSize.mobileL})`]: {
  //     fontSize: '1.5rem'
  //   }
  // },
  inline: {
    fontSize: '1.5rem',
    color: colors.textPrimary
  },
  description: {
    fontSize: '1rem',
    color: colors.textSecondary,
    padding: '0.2rem',
  },
  // checkButton: {
  //   alignSelf: 'flex-end',
  //   color: '#FF934F',
  //   border: 'none',
  //   backgroundColor: colors.buttonPrimary,
  //   '&:hover': {
  //     backgroundColor: colors.buttonPrimaryHover,
  //   },
  //   borderRadius: '2rem',
  //   color: colors.white,
  //   padding: '0.2rem 0.6rem',
  //   fontSize: '1rem',
  //   [`@media (max-width: ${viewportSize.mobileL})`]: {
  //     fontSize: '0.6rem'
  //   },
  //   marginRight: '0.5rem',
  // },
  buttonContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '0.5rem  '
  }
})

const RepositoryCard = (props) => {
  const classes = useStyles();
  const CardIcon = props.cardIcon;

  return (
    <div className={classes.card}>
      <div className={classes.headerContainer}>
        <CardIcon className={classes.cardIcon} spacing={2} />
        <Typography variant="h4" className={classes.inline}>{props.title}</Typography>
      </div>

      <p className={classes.description}>{props.description}</p>

      <div className={classes.buttonContainer}>
        <CustomButton linkTo={props.linkTo} text="check" isAbsolute={false}/>
      </div>
    </div>
  );
}

RepositoryCard.propTypes = {
  cardIcon: PropTypes.elementType
};

export default RepositoryCard;