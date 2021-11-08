import PersonAdd from '@material-ui/icons/PersonAdd';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ArrowBack from '@material-ui/icons/ArrowBack';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { Grid, makeStyles, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { colors, viewportSize } from '../utilities/utilities';
import TextField from '@material-ui/core/TextField';
import { GOOGLE_AUTH_URL } from '../oauth2/constants';
import googleLogo from "../assets/google-logo.png";
import "../styles/index.css"


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
    cardContainer: {
        justifyContent: 'center',
        marginTop: '20vh'
    },
    card: {
        border: `2px solid ${colors.borderPrimary}`,
        backgroundColor: colors.white,
        padding: '1rem',
        borderRadius: '1rem',
        overflow: 'hidden',
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        color: colors.textPrimary,
    },
    inline: {
        display: 'inline-block'
    },
    checkButton: {
        alignSelf: 'flex-end',
        textTransform: 'none',
        border: 'none',
        minWidth: '200px',
        backgroundColor: colors.buttonPrimary,
        '&:hover': {
            backgroundColor: colors.buttonPrimaryHover,
        },
        borderRadius: '2rem',
        color: colors.white,
        padding: '0.2rem 0.6rem',
        fontSize: '1rem',
        [`@media (max-width: ${viewportSize.mobileL})`]: {
            fontSize: '0.6rem'
        },
        marginRight: '0.5rem',
    },
    cardDescriptionIcon: {
        position: 'relative',
        top: '15px',
        marginRight: '1em',
        '& svg': {
            fontSize: '4rem'
        },
        color: colors.cardIconPrimary,
    },
    buttonContainer: {
        justifyContent: 'center'
    },
    formContainer: {
        justifyContent: 'center'
    },
    fullWidth: {
        width: '100%'
    }
}))


const LoginPage = (props) => {

    const classes = useStyles();

    const module = props.register ? 'Register' : 'Login';

    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    return (

        <Grid container className={classes.cardContainer}>
            <Grid item container className={classes.card} spacing={3} xs={12} lg={4}>
                <Grid item container spacing={2} className={classes.header}>
                    <Grid item>
                        <span className={classes.cardDescriptionIcon}>
                            {props.register ? <PersonAdd /> : <HowToRegIcon />}
                        </span>
                        <Typography variant="h4" className={classes.inline}>{module}</Typography>
                    </Grid>
                </Grid>
                <Grid item container className={classes.formContainer}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField className={classes.fullWidth}
                            required
                            variant="outlined"
                            id="login"
                            label="Login" />
                        <TextField className={classes.fullWidth}
                            required
                            variant="outlined"
                            id="password"
                            label="Password"
                            type="password"
                        />
                        {props.register ? <TextField className={classes.fullWidth}
                            required
                            variant="outlined"
                            id="retype-password"
                            label="Retype password"
                            type="password"
                        /> : ''}
                    </form>

                </Grid>
                <Grid item container className={classes.buttonContainer}>
                    <Button onClick={goBack} variant="outlined" endIcon={<ArrowBack />} className={classes.checkButton} text="check">Back</Button>
                    {props.register ?
                        <Button component={Link} to={props.linkTo} variant="outlined" endIcon={<EventNoteIcon />} className={classes.checkButton} text="check">Register</Button>
                        :
                        <Button component={Link} to={props.linkTo} variant="outlined" endIcon={<EventNoteIcon />} className={classes.checkButton} text="check">Login</Button>
                    }
                </Grid>
                
                <Grid item container className={classes.buttonContainer}>
                    <div className="login-container">
                        <div className="login-content">
                            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                                <img src={googleLogo} className="google" alt="Google" /> 
                                <span className="login-title">Log in with Google</span>
                            </a>
                        </div>
                    </div>
                </Grid>
                
            </Grid>
        </Grid>
    )
}

export default LoginPage
