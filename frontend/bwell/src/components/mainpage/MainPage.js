import { makeStyles } from "@material-ui/core";
import big_logo from "../../assets/logo_large.png";
import { Grid } from "@material-ui/core";
import MainCard from "./MainCard"
import EatWellLogo from "../../assets/menu_eatwell.png"
import FitWellLogo from "../../assets/menu_fitwell.png"
import RestWellLogo from "../../assets/menu_restwell.png"
import ThinkWellLogo from "../../assets/menu_thinkwell.png"
import { endpoints, viewportSize } from "../../utilities/utilities";


const useStyles = makeStyles({
    justifyCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: viewportSize.laptop,
        margin: '0 auto'
    },
    //this could call theme viewportSize breakpoints
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
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const MainPage = () => {

    const classes = useStyles();

    

    return (
        <>
            <div>
                <img src={big_logo} className={classes.logo} alt="logo" />
            </div>

            <Grid container >
                <Grid item container direction={'row'} className={classes.justifyCenter} spacing={2} xs={12}>
                    <Grid item className={classes.gridItem} xs={12} md={6}>
                        <MainCard
                            image={EatWellLogo}
                            menuTitle={"eatWell"}
                            description={"Nutrition Recipes - repository & search \nBMI Calculator / Fat, Carbs, Protein demand \nDiet plan"}
                            linkTo={endpoints.eatwell} />
                    </Grid>
                    <Grid item className={classes.gridItem} xs={12} md={6}>
                       <MainCard
                            image={FitWellLogo}
                            menuTitle={"fitWell"}
                            description={"Fitness exercises repository \nwith WHERE, WHEN and EQUIPMENT"}
                            linkTo={endpoints.fitwell} />
                    </Grid>
                    <Grid item className={classes.gridItem} xs={12} md={6}>
                        <MainCard
                                image={RestWellLogo}
                                menuTitle={"restWell"}
                                description={"Relax ideas repository"}
                                linkTo={endpoints.restwell} />
                    </Grid>
                    <Grid item className={classes.gridItem} xs={12} md={6}>
                        <MainCard
                                image={ThinkWellLogo}
                                menuTitle={"thinkWell"}
                                description={"Self-improvement ideas repository"}
                                linkTo={endpoints.thinkwell} />
                    </Grid>
                </Grid>
            </Grid>

        </>

    )
}

export default MainPage
