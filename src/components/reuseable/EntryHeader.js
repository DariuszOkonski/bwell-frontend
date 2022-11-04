import React, { useEffect, useState } from 'react'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { colors, viewportSize } from '../../utilities/utilities';
import { ThumbUpOutlined } from '@material-ui/icons';
import { Divider } from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core';
import { ratings } from '../../utilities/BackendRequests';
import { isUserAuthenticated } from '../../utilities/UserService';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '0.8rem 0'
    },
    title: {
        flexGrow: "1",
        color: `${colors.textPrimary}`,
        fontSize: "1.25rem",
        [`@media (min-width: ${viewportSize.mobileL})`] : {
            fontSize: '1.625rem'
          },
        fontWeight: "400"
    },
    icon: {
        width: "3rem",
        marginRight: "1rem",
        color: `${colors.cardIconPrimary}`,
        '& svg' : {
            width: '100%', 
            height: '100%'
        },
        [`@media (min-width: ${viewportSize.tablet})`] : {
            width: '6rem'
          }
    },
    ratingContainer: {
        display: "flex"
    },
    rating: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    handUp: {
        fontSize: "1.6rem",
        cursor: "pointer",
        margin: '0.25rem',
        color: `${colors.handUp}`,
        [`@media (min-width: ${viewportSize.mobileL})`] : {
            fontSize: '2rem'
          },
        "&:hover, &:focus": {
            borderBottom: "3px transparent solid"

        }
    },
    handDown: {
        fontSize: "1.6rem",
        margin: '0.25rem',
        cursor: "pointer",

        color: `${colors.handDown}`,
        [`@media (min-width: ${viewportSize.mobileL})`] : {
            fontSize: '2rem'
          },
          
        "&:hover, &:focus": {
            borderBottom: "3px transparent solid"
        }
    },
    ratingCount: {
        fontSize: '1rem',
        color: `${colors.textSecondary}`
    },

    clicked: {
        cursor: "default",
        opacity: "0.3",
        "&:hover, &:focus": {
            borderBottom: "none"

        }
    }
})

export const EntryHeader = ({header = "todo", icon=<RestaurantIcon />, rating, entry}) => {
    const classes = useStyles();
    const [ratingState, setRating] = useState(rating)
    const [currentVote, setCurrentVote] = useState()

    const handleSetRating = async (voteStr) =>{
        if (!entry){ return }
        const newRating = await ratings.vote(entry, voteStr);
        const vote = await ratings.getCurrentVote(entry.id);
        setRating(newRating)
        setCurrentVote(vote);
    }

    useEffect(() => {
        const getCurrentVote = async () =>{
            if (!entry || !isUserAuthenticated()){ return }
            const vote = await ratings.getCurrentVote(entry.id);
            setCurrentVote(vote);
            
        }
        getCurrentVote();
    }, [])
    return (
        <div className={classes.container}>            
            <div className={classes.icon}>
                {icon}
            </div>

            <h3 className={classes.title}>{header}</h3>
            <div className={classes.ratingContainer}>
                <div className={classes.rating}>
                    <ThumbUpOutlinedIcon onClick={() => handleSetRating("UP")} className={`${classes.handUp} ${currentVote && currentVote.voteValue === "UP" && classes.clicked}`}/>
                    <span className={classes.ratingCount}>{ratingState.up}</span>
                </div>
                <div className={classes.rating}>
                    <ThumbDownOutlinedIcon onClick={() => handleSetRating("DOWN")} className={`${classes.handDown} ${currentVote && currentVote.voteValue === "DOWN" && classes.clicked}`}/>
                    <span className={classes.ratingCount}>{ratingState.down}</span>
                </div>
            </div>
        </div>
    )
}

EntryHeader.defaultProps = {
    rating: {
        up: 0,
        down: 0
    }
}
