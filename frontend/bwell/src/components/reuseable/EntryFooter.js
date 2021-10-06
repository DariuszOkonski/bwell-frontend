import { makeStyles } from '@material-ui/styles';
import React from 'react'
import CustomButton from './CustomButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useRouteMatch } from 'react-router';

const useStyles = makeStyles({
    buttonsContainer: {
        display: "flex",
        justifyContent: "center",
        // padding: "0.5rem",
        marginTop: "2rem"
    },
    button: {
        margin: '0 0.5rem'
    }
})
export const EntryFooter = ({disabled=false}) => {
    const {path, url} = useRouteMatch();

    const getBackToLink = () => {
        const splitted = url.split("/")
        return splitted[1]
    }
    
    const classes = useStyles();
    return (
        <div className={classes.buttonsContainer}>
            <div className={classes.button}>
                <CustomButton disabled={disabled} text="Back" linkTo={`/${getBackToLink()}`} isAbsolute={false}/>
            </div>
            <div className={classes.button}>
                <CustomButton disabled={disabled} className={classes.button} text="Add to favourites" linkTo="" isAbsolute={false} icon={<FavoriteBorderIcon/>}/>
            </div>
        </div>
    )
}
