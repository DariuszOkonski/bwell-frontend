import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import CustomButton from './CustomButton';
import { colors, viewportSize } from '../utilities/utilities';
import { Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { FormControl, InputLabel, Select } from '@material-ui/core';

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
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    options: {
        // justifyContent: 'flex-end'
    },
    separateTitle: {
        justifyContent: 'space-between'
    }
}))

const CategoriesBar = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.card}>
            <Grid container className={classes.separateTitle}>
                <Grid item>
                    <Typography variant="h4">{props.location}</Typography>
                </Grid>
                <Grid item container className={classes.options} xs={12} md={6}>
                    <FormControl className={classes.formControl}>
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
        </Box>
    );
}

export default CategoriesBar;