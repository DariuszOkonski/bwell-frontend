import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../utilities/utilities';
import { Link } from 'react-router-dom';

const MODULE_INDEX = 1
const ENTRY_INDEX = 2

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

export default function SimpleBreadcrumbs({path, header = "", isCalculator = false}) {
    const classes = useStyles();
    const pathArray = path.split('/');
    
    return (
        <Breadcrumbs aria-label="breadcrumb" className={classes.container} style={{margin: `${!isCalculator ? '0' : '0 0.5rem' }` }}>
            <Typography color="textPrimary" className={classes.linkPrimaryColor}></Typography>
            <Link color="inherit" className={classes.linkColor} to={`/${pathArray[MODULE_INDEX]}`} >
                 {pathArray[MODULE_INDEX]}
            </Link>
            <Typography color="textPrimary" className={classes.linkPrimaryColor}>{pathArray[ENTRY_INDEX]}</Typography>
            {
                header && <Typography color="textPrimary" className={classes.linkPrimaryColor}>{header}</Typography>}
        </Breadcrumbs>
    );
}