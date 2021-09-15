import React from 'react'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { makeStyles } from '@material-ui/styles';
import { colors, viewportSize } from '../../utilities/utilities';
import { ThumbUpOutlined } from '@material-ui/icons';

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
        fontSize: "3rem",
        marginRight: "1rem",
        color: `${colors.cardIconPrimary}`,
        [`@media (min-width: ${viewportSize.tablet})`] : {
            fontSize: '6rem'
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
        margin: '0.25rem',
        color: `${colors.handUp}`,
        [`@media (min-width: ${viewportSize.mobileL})`] : {
            fontSize: '2rem'
          }
    },
    handDown: {
        fontSize: "1.6rem",
        margin: '0.25rem',

        color: `${colors.handDown}`,
        [`@media (min-width: ${viewportSize.mobileL})`] : {
            fontSize: '2rem'
          }
    },
    ratingCount: {
        fontSize: '1rem',
        color: `${colors.textSecondary}`
    }
})

export const EntryHeader = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <RestaurantIcon className={classes.icon}/>
            <h3 className={classes.title}>Recipe 1 REcipe re</h3>
            <div className={classes.ratingContainer}>
                <div className={classes.rating}>
                    <ThumbUpOutlinedIcon className={classes.handUp}/>
                    <span className={classes.ratingCount}>12</span>
                </div>
                <div className={classes.rating}>
                    <ThumbDownOutlinedIcon className={classes.handDown}/>
                    <span className={classes.ratingCount}>3</span>
                </div>
            </div>
        </div>
    )
}
