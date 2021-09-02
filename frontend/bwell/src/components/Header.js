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
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    logo: {
        display: 'block',
        width: '4rem',
    },
    buttonsContainer: {
    },
    button: {
        margin: '0',
        fontSize: '0.6rem'
    },
}));


const Header = (props) => {

const classes = useStyles();
return (

    <AppBar position="static" className="header">
        <Toolbar>
            <div className={classes.container}>
                    <Link to="/"><img className={classes.logo} src={props.logo} /></Link>
                <div className={classes.buttonsContainer}>
                    <Button component={Link} to="/login" color="inherit" className={classes.button} startIcon={<HowToRegIcon />}>
                        Login
                    </Button>
                    <Button component={Link} to="/register" color="inherit" className={classes.button} startIcon={<PersonAdd />}>
                        Register
                    </Button>
                </div>
            </div>
        </Toolbar>
    </AppBar>
)
}

export default Header;
