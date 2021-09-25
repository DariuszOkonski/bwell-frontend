import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import CustomButton from './CustomButton';
import { colors, viewportSize } from '../../utilities/utilities';
import { Grid, responsiveFontSizes } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import SimpleBreadcrumbs from './SimpleBreadcrumbs';

const useStyles = makeStyles((theme) => ({
    card: {
        position: 'relative',
        border: `2px solid ${colors.borderPrimary}`,
        backgroundColor: colors.white,
        padding: '0.5rem',
        borderRadius: '1rem',
        overflow: 'hidden',
        margin: '0 0.4rem'
    },
    formControl: {
        margin: 0,
        minWidth: 120,
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    options: {
        justifyContent: 'space-around',
    },
    separateTitle: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    responsiveFont: {
        color: colors.textPrimary,
        fontSize: '1rem',
        padding: '1rem'
    }

}))

const CategoriesBar = (props) => {
    const classes = useStyles();

    const locationPath = props.location.split('/');
    console.log(locationPath)

    return (
        <Box className={classes.card} xs={12} md={10} lg={8}>
            <Grid container className={classes.separateTitle} >
                <Grid item xs={12} md={5} lg={4}>
                    <Typography variant="p" className={classes.responsiveFont}>/ {locationPath[1]}</Typography>
                </Grid>
                <Grid item container className={classes.options} xs={12} md={7}>
                    <Grid item xs={12} md={4}>
                        <FormControl className={classes.formControl} >
                            <InputLabel htmlFor="category">Categories</InputLabel>
                            <Select
                                native
                                value={'c'}
                            >
                                <option aria-label="None" value="" />
                                <option value={'c1'}>Category1</option>
                                <option value={'c2'}>Category2</option>
                                <option value={'c3'}>Category3</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="category">Filters</InputLabel>
                            <Select
                                native
                                value={'c'}
                            >
                                <option aria-label="None" value="" />
                                <option value={'c1'}>Filter1</option>
                                <option value={'c2'}>Filter2</option>
                                <option value={'c3'}>Filter3</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CategoriesBar;