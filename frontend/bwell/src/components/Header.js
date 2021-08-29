import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Grid from '@material-ui/core/Grid';


const Header = (props) => {

    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Grid container className="spacebetween">
                    <Grid item>
                        <img src={props.logo} />
                    </Grid>
                    <Grid item>
                        <Button color="inherit">
                            <HowToRegIcon /> Login
                        </Button>
                        <Button color="inherit">
                            <PersonAdd /> Register
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
