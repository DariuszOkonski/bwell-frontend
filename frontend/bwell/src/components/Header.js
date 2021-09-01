import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Block } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    logo: {
        display: 'block',
        width: '117px',
    },
    button: {
        margin: theme.spacing(1),
    },
}));


const Header = (props) => {

const classes = useStyles();
return (

    <AppBar position="static" className="header">
        <Toolbar>
            <Grid container className="spacebetween">
                <Grid item>
                {/* <Button onClick={props.openMenu ? props.handleCloseMenu : props.handelOpenMenu}>OPEN/CLOSE</Button> */}
                    <Link to="/"><img className={classes.logo} src={props.logo} /></Link>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/login" color="inherit" className={classes.button} startIcon={<HowToRegIcon />}>
                        Login
                    </Button>
                    <Button component={Link} to="/register" color="inherit" className={classes.button} startIcon={<PersonAdd />}>
                        Register
                    </Button>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
)
}

export default Header;
