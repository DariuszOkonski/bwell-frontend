import { makeStyles } from '@material-ui/styles';
import React from 'react'
import CustomButton from './CustomButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
export const EntryFooter = () => {
    const classes = useStyles();
    return (
        <div className={classes.buttonsContainer}>
            <div className={classes.button}>
                <CustomButton text="Back" linkTo="" isAbsolute={false}/>
            </div>
            <div className={classes.button}>
                <CustomButton className={classes.button} text="Add to favourites" linkTo="" isAbsolute={false} icon={<FavoriteBorderIcon/>}/>
            </div>
        </div>
    )
}
