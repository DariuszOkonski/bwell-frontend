import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { colors } from '../utilities/utilities';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        position: 'relative',
        border: `2px solid ${colors.borderPrimary}`,
        backgroundColor: colors.white,
        padding: '1rem',
        borderRadius: '1rem',
        overflow: 'hidden',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    options: {
        justifyContent: 'space-around'
    },
    separateTitle: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    responsiveFont: {
        [theme.breakpoints.up('xs')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.2rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2.6rem',
        },
    }

}))

const RepositoryTopBar = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.card} xs={12} md={10} lg={8}>
            <Grid container className={classes.separateTitle} >
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.responsiveFont}>{props.text}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RepositoryTopBar;