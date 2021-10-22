import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { Link } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { colors, viewportSize, endpoints } from '../../utilities/utilities';
import PropTypes from "prop-types";
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import { Button } from '@material-ui/core';
import { favourites } from '../../utilities/BackendRequests';
import { useContext } from 'react';
import { FavouritesContext } from './FavouritesPage';



const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        border: `1px solid ${colors.borderPrimary}`,
        backgroundColor: colors.white,
        padding: '1rem',
        borderRadius: '1rem',
        overflow: 'hidden',
        margin: '0.5em'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    header: {
        display: 'inline',
        color: colors.textPrimary,
        [`@media (max-width: ${viewportSize.mobileL})`]: {
            fontSize: '1.5rem'
        }
    },
    checkButton: {
        textTransform: 'none',
        float: 'right',
        // alignSelf: 'flex-end',
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
}));

const FavouritesListElement = ((props) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const favouriteEntry = props.idea;

    const passChangeUp = useContext(FavouritesContext);

    let respositoryURL;

    switch (props.type) {
        case 'fitWell':
            respositoryURL = endpoints.fitwell_activity;
            break;
        case 'eatWell':
            respositoryURL = endpoints.eatwell_recipe;
            break;
        case 'restWell':
            respositoryURL = endpoints.restwell_idea;
            break;
        case 'thinkWell':
            respositoryURL = endpoints.thinkwell_idea;
            break;
        default:
            respositoryURL = '';
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const removeFromFavourites = async (event) => {
        await favourites.removeFromFavouritesById(favouriteEntry.id, props.type.toLowerCase());
        passChangeUp(event);
    }

    return (

        <Card className={classes.root} >
            <Typography variant="p" className={classes.header} component="p">
                <Link href={respositoryURL + favouriteEntry.id}>{favouriteEntry.title}</Link>
            </Typography>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
            <Button
                component={Link}
                to="#"
                onClick={(event) => {
                    event.preventDefault();
                    removeFromFavourites(event);
                }}
                variant="outlined"
                endIcon={<AssignmentReturnedIcon />} 
                className={classes.checkButton} 
                text="check">Remove</Button>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {favouriteEntry.description}

                </CardContent>
            </Collapse>
        </Card >
    );
});

FavouritesListElement.propTypes = {
    cardIcon: PropTypes.elementType
};

export default FavouritesListElement;