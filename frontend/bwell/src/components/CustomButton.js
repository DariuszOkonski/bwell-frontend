import React from 'react';
import { Link } from 'react-router-dom';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { colors, viewportSize } from '../utilities/utilities';

const useStyles = makeStyles({
    button: {
        position: 'absolute',
        right: '0.5rem',
        bottom: '0.5rem',
        border: 'none',
        textTransform: 'capitalize',
        backgroundColor: colors.buttonPrimary,
        '&:hover': {
            backgroundColor: colors.buttonPrimaryHover,
        },
        borderRadius: '2rem',
        color: colors.white,
        padding: '0.2rem 0.6rem',
        fontSize: '1rem',
        [`@media (max-width: ${viewportSize.mobileL})`] : {
            fontSize: '0.8rem'
        }
    },
    buttonNotAbsolute: {        
        border: 'none',
        textTransform: 'capitalize',
        backgroundColor: colors.buttonPrimary,
        '&:hover': {
            backgroundColor: colors.buttonPrimaryHover,
        },
        borderRadius: '2rem',
        color: colors.white,
        padding: '0.2rem 0.6rem',
        fontSize: '1rem',
        [`@media (max-width: ${viewportSize.mobileL})`] : {
            fontSize: '0.8rem'
        }
    }
})

const CustomButton = ({linkTo, text, isAbsolute = true}) => {
    const classes = useStyles();

    return (  
        <Button 
            component={Link} 
            to={linkTo} 
            variant="outlined" 
            endIcon={<AssignmentReturnedIcon />}
            className={isAbsolute ? classes.button : classes.buttonNotAbsolute}
        >
            {text}
        </Button>
    );
}
 
export default CustomButton;