import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import { Block } from '@material-ui/icons';
import { colors, endpoints } from '../../utilities/utilities';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  window.location.href = "/eatwell";
}

const useStyles = makeStyles({
    container: {
        display: 'block',
        border: `1px solid ${colors.borderPrimary}`,
        backgroundColor: colors.white,
        borderRadius: '1rem',
        padding: '1rem',
    },
    linkColor: {
        color: colors.textSecondary,
        cursor: 'pointer',
        fontFamily: 'Lato'
    },
    linkPrimaryColor: {
        color: colors.textPrimary,
        fontFamily: 'Lato'
    }
})

export default function SimpleBreadcrumbs({path, header = ""}) {
    const classes = useStyles();

    const pathArray = path.split('/');
    console.log(pathArray)

    return (
        <Breadcrumbs aria-label="breadcrumb" className={classes.container}>
            <Typography color="textPrimary" className={classes.linkPrimaryColor}></Typography>
            <Link color="inherit" className={classes.linkColor} to={endpoints.eatwell} >
                 {pathArray[1]}
            </Link>
            <Typography color="textPrimary" className={classes.linkPrimaryColor}>{pathArray[2]}</Typography>
            <Typography color="textPrimary" className={classes.linkPrimaryColor}>{header}</Typography>
        </Breadcrumbs>
    );
}