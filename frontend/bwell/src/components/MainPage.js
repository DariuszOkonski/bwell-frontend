import { makeStyles } from "@material-ui/core";
import big_logo from "../assets/logo_large.png";
import { Grid } from "@material-ui/core";
import MainCard from "./MainCard"
import EatWellLogo from "../assets/menu_eatwell.png"
import FitWellLogo from "../assets/menu_fitwell.png"
import RestWellLogo from "../assets/menu_restwell.png"
import ThinkWellLogo from "../assets/menu_thinkwell.png"
import { viewportSize } from "../utilities/utilities";

const useStyles = makeStyles({
    justifyCenter: {
        justifyContent: 'center',
        marginTop: '1rem'
    },
    logo: {
        height: '3rem',
        [`@media (min-width: ${viewportSize.mobileS})`]: {
            height: '4rem'
        },
        [`@media (min-width: ${viewportSize.tablet})`]: {
            height: '6rem'
        },
        [`@media (min-width: ${viewportSize.laptop})`]: {
            height: '8rem'
        }
    }
})

const MainPage = () => {

    const classes = useStyles();

    return (

        <Grid container className={classes.justifyCenter}>
            <Grid item>
                <img src={big_logo} className={classes.logo} alt="logo" />
            </Grid>
            <Grid item container direction={'row'} className={classes.justifyCenter} spacing={2} xs={12}>
                <Grid item xs={12} md={6} lg={4}>
                    <MainCard
                        image={EatWellLogo}
                        menuTitle={"eatWell"}
                        description={"Nutrition Recipes - repository & search BMI Calculator / Fat, Carbs, Protein demand Diet plan"}
                        linkTo="/eatWell" />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <MainCard
                        image={FitWellLogo}
                        menuTitle={"fitWell"}
                        description={"Nutrition Recipes - repository & search BMI Calculator / Fat, Carbs, Protein demand Diet plan"}
                        linkTo="/fitWell" />
                </Grid>
            </Grid>
            <Grid item container direction={'row'} className={classes.justifyCenter} spacing={2} xs={12}>
                <Grid item xs={12} md={6} lg={4}>
                    <MainCard
                        image={RestWellLogo}
                        menuTitle={"restWell"}
                        description={"Relax ideas repository"}
                        linkTo="/restWell" />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <MainCard
                        image={ThinkWellLogo}
                        menuTitle={"thinkWell"}
                        description={"Self-improvement ideas repository"}
                        linkTo="/thinkWell" />
                </Grid>
            </Grid>
        </Grid>

    )
}

export default MainPage
