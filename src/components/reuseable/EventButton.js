import React from 'react';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { colors, viewportSize } from '../../utilities/utilities';


const EventButton = ({text, callback=null, icon=<AssignmentReturnedIcon />, isAbsolute = true, isClicked=null}) => {
    
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
            fontSize: '0.9rem',
            [`@media (max-width: ${viewportSize.mobileL})`] : {
                fontSize: '0.8rem'
            }
        }
    })
    

    const classes = useStyles();

    return (  
        <Button 
            variant="outlined" 
            endIcon={icon}
            className={isAbsolute ? classes.button : classes.buttonNotAbsolute}
            onClick={callback}
            disabled={isClicked != null && isClicked == true ? true : false}
        >
            {text}
        </Button>
    );
}
 
export default EventButton;