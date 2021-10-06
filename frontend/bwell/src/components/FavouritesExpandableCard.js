import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { colors, endpoints, viewportSize } from '../utilities/utilities';
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import FavouritesListElement from './FavouritesListElement';
import { useEffect } from 'react';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        border: `1px solid ${colors.borderPrimary}`,
        backgroundColor: colors.white,
        padding: '0.5rem',
        borderRadius: '1rem',
        overflow: 'hidden'
    },
    checkButton: {
        textTransform: 'none',
        alignSelf: 'flex-end',
        color: '#FF934F',
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
    cardIcon: {
        fontSize: 70,
        position: 'relative',
        marginRight: '0.5em',
        color: colors.cardIconPrimary,
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
        fontSize: '36px',
        color: colors.textPrimary,
        margin: '0',
        padding: '0',
        [`@media (max-width: ${viewportSize.mobileL})`]: {
            fontSize: '1.5rem'
        }
    },
}));

const FavouritesExpandableCard = ((props) => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const CardIcon = props.cardIcon;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [ideas, setIdeas] = useState(null);

    let APIurl;

    switch (props.type) {
        case 'fitWell':
            APIurl = endpoints.APIfitWell;
            break;
        case 'eatWell':
            APIurl = endpoints.APIeatWell;
            break;
        case 'restWell':
            APIurl = endpoints.APIrestWell;
            break;
        case 'thinkWell':
            APIurl = endpoints.APIthinkWell;
            break;
        default:
            APIurl = '';
    }

    useEffect(() => {

        const fetchIdeas = async () => {
            console.log(APIurl);
            const response = await fetch(endpoints.APIhost + APIurl)
            const data = await response.json()

            return data
        }

        const getIdeas = async () => {
            const ideasFromServer = await fetchIdeas()
            setIdeas(ideasFromServer)
        }
        getIdeas()

        console.log(ideas);

    },[APIurl, ideas]);

    //given I have ids [1,2,3] for favourites in props.favourites. need to retrieve each from API and show title and URL to details
    // ?id=1

    return (
        ideas && ideas.map((ideaId) => {
            return (
            <Card className={classes.root} >
                <CardContent>
                    <CardIcon className={classes.cardIcon} spacing={2} />
                    <Typography variant="h2" className={classes.header} component="h1">
                        {props.title}
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
                </CardContent>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <FavouritesListElement />
                    </CardContent>
                    <CardContent>
                        <Button component={Link} to={props.linkTo} variant="outlined" endIcon={<AssignmentReturnedIcon />} className={classes.checkButton} text="check">Remove</Button>
                        <Button component={Link} to={props.linkTo} variant="outlined" endIcon={<AssignmentReturnedIcon />} className={classes.checkButton} text="check">Back</Button>
                    </CardContent>
                </Collapse>
            </Card >
            )
        }

        )

    );
});

FavouritesExpandableCard.propTypes = {
    cardIcon: PropTypes.elementType
};

export default FavouritesExpandableCard;