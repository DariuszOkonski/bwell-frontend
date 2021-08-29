import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const Footer = (props) => {

    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item>
                        <img src={props.logo} />
                    </Grid>
                    <Grid item>
                    <Typography>
                    &copy; 2021 All Rights Reserved
                    </Typography>
                    </Grid>
                    <Grid item style={{flex: 1, textAlign: 'end'}}>
                        <Typography>
                            Privacy Policy
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;
