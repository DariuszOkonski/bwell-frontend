import { makeStyles } from '@material-ui/styles';
import React from 'react'
import CustomButton from './CustomButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Redirect, useHistory, useRouteMatch } from 'react-router';
import EventButton from './EventButton';
import { favourites } from '../../utilities/BackendRequests';
import { endpoints } from '../../utilities/utilities';

const useStyles = makeStyles({
    buttonsContainer: {
        display: "flex",
        justifyContent: "center",
        // padding: "0.5rem",
        marginTop: "2rem"
    },
    button: {
        margin: '0 0.5rem'
    },
})
export const EntryFooter = ({ disabled = false, callback = () => null, isLive = false, entryId, module }) => {
    const { path, url } = useRouteMatch();
    const history = useHistory();

    const getBackToLink = () => {
        const splitted = url.split("/")
        return splitted[1]
    }

    const addToFavourites = async () => {
        await favourites.addToFavouritesById(entryId, module);
        
        history.push('/favourites');
    }

    const buttons = () => (
        !disabled ?
            <>
                <div className={classes.button}>
                    <CustomButton disabled={disabled} text="Back" linkTo={`/${getBackToLink()}`} isAbsolute={false} />
                </div>
                <div className={classes.button}>
                    <CustomButton
                        onClick={(event) => {
                            event.preventDefault()
                            addToFavourites()
                        }}
                        linkTo="#"
                        disabled={disabled}
                        className={classes.button}
                        text="Add to favourites"
                        isAbsolute={false}
                        icon={<FavoriteBorderIcon />} />
                </div>
            </> :
            <div>
                <EventButton className={classes.button} text={isLive ? "Turn off live preview" : "Turn on live preview"} callback={callback} isAbsolute={false} icon={<FavoriteBorderIcon />} />
            </div>
    )

    const classes = useStyles();
    return (
        <div className={classes.buttonsContainer}>
            {buttons()}
        </div>
    )
}
