import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import { viewportSize, colors, endpoints } from '../../utilities/utilities';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import UserService, { Logout } from '../../utilities/UserService';
import { useEffect, useState } from 'react';
import { ACCESS_TOKEN } from '../../oauth2/constants';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    header: {
        backgroundColor: `${colors.topNavPrimary}`
    }, 
    logo: {
        display: 'block',
        width: '4rem',
        [`@media(min-width: ${viewportSize.mobileL})`] : {
            width: '6rem'
        }
    },
    buttonsContainer: {
    },
    hamburgerMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    button: {
        margin: '0',
        fontSize: '0.6rem',
        [`@media(min-width: ${viewportSize.mobileL})`]: {
            fontSize: '1rem'
        }
    },
}));

    
const Header = (props) => {
const classes = useStyles();

const [loggedUser, setLoggedUser] = useState(null)

useEffect(() => {
    const refreshUser = async () => {
        if (localStorage.getItem(ACCESS_TOKEN)){
            setLoggedUser(await UserService(true))
        } else {
            setLoggedUser(null)
        }
    }
    refreshUser()
}, [loggedUser])

return (

    <AppBar position="static" className={classes.header}>
        <Toolbar>
            <div className={classes.container}>
                
                <div className={classes.hamburgerMenu}>
                    <Link to="/"><img className={classes.logo} src={props.logo} alt="logo"/></Link>
                    <SwipeableTemporaryDrawer />                    
                </div>
                
                <div className={classes.buttonsContainer}>
                    {
                    loggedUser ? (<>
                        <Button component={Link} to={endpoints.favourites} color="inherit" className={classes.button}>
                                {loggedUser.email}
                        </Button>
                        <Button component={Link} to={endpoints.favourites} color="inherit" className={classes.button} startIcon={<FavoriteBorderIcon />}>
                            Favourites
                        </Button>
                        <Button component={Link} onClick={Logout} to={endpoints.main} color="inherit" className={classes.button} startIcon={<HowToRegIcon />}>
                            Logout
                        </Button>
                    </>) : (
                        <>
                        <Button component={Link} to={endpoints.login} color="inherit" className={classes.button} startIcon={<HowToRegIcon />}>
                            Login
                        </Button>
                        <Button component={Link} to={endpoints.register} color="inherit" className={classes.button} startIcon={<PersonAdd />}>
                            Register
                        </Button>
                        </>
                    )
                    
}
                </div>
            </div>
        </Toolbar>
    </AppBar>
)
}

export default Header;
