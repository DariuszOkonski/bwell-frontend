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
import { colors, viewportSize } from '../utilities/utilities';
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        border: `1px solid ${colors.borderPrimary}`,
        backgroundColor: colors.white,
        padding: '1rem',
        borderRadius: '1rem',
        overflow: 'hidden',
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
}));

const FavouritesListElement = ((props) => {

    const classes = useStyles();
    const[expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

        return (

            <Card className={classes.root} >
                    <Typography variant="p" className={classes.header} component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli.
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
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli.

                    </CardContent>
                </Collapse>
            </Card >
        );
    } );

FavouritesListElement.propTypes = {
    cardIcon: PropTypes.elementType
};

export default FavouritesListElement;