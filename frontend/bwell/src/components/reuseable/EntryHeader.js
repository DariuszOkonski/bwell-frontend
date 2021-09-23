import React from 'react'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { colors, viewportSize } from '../../utilities/utilities';
import { ThumbUpOutlined } from '@material-ui/icons';
import { Divider } from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core';


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

export const EntryHeader = ({header = "todo", icon=<RestaurantIcon />, rating}) => {
    const classes = useStyles();

    console.log('rating ====================')
    console.log(rating)
    return (
        <div className={classes.container}>            
            <div className={classes.icon}>
                {icon}
            </div>

            <h3 className={classes.title}>{header}</h3>
            <div className={classes.ratingContainer}>
                <div className={classes.rating}>
                    <ThumbUpOutlinedIcon className={classes.handUp}/>
                    <span className={classes.ratingCount}>{rating.up}</span>
                </div>
                <div className={classes.rating}>
                    <ThumbDownOutlinedIcon className={classes.handDown}/>
                    <span className={classes.ratingCount}>{rating.down}</span>
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
