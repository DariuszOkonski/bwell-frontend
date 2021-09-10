import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import { Block } from '@material-ui/icons';
import { colors } from '../../utilities/utilities';

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
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
        color: colors.textSecondary
    },
    linkPrimaryColor: {
        color: colors.textPrimary
    }
})

export default function SimpleBreadcrumbs() {
    const classes = useStyles();

    return (
        <Breadcrumbs aria-label="breadcrumb" className={classes.container}>
            <Link color="inherit" className={classes.linkColor} href="/" onClick={handleClick}>
                Material-UI
            </Link>
            <Link color="inherit" className={classes.linkColor} href="/getting-started/installation/" onClick={handleClick}>
                Core
            </Link>
            <Typography color="textPrimary" className={classes.linkPrimaryColor}>Breadcrumb</Typography>
        </Breadcrumbs>
    );
}