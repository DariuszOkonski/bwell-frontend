import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { viewportSize, colors } from '../utilities/utilities';

const useStyles = makeStyles({
    footer: {
        backgroundColor: `${colors.footerPrimary}`,        
    },
    toollbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logorights: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    typography: {
        padding: '0 0 0 0.4rem',
        fontSize: '0.6rem',
        [`@media(min-width: ${viewportSize.mobileL})`]: {
            fontSize: '1rem'
        }
    }
})

const Footer = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.footer}>
            <Toolbar className={classes.toollbar}>
                <div className={classes.logorights}>
                    <img src={props.logo} alt="logo" />
                    <Typography className={classes.typography}>&copy; 2021 All Rights Reserved</Typography>
                </div>
                <div>
                    <Typography className={classes.typography}>Privacy Policy</Typography>                    
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;
