import { makeStyles, Paper } from "@material-ui/core";
import big_logo from "../assets/logo_large.png";
import { Grid } from "@material-ui/core";
import MainCard from "./MainCard"
import EatWellLogo from "../assets/menu_eatwell.png"

const useStyles = makeStyles({
    spaceAround: {
        justifyContent: 'center'
    },
    mainCardsContainer: {
        
    },
    logo: {
        height: '10em'
    }
})

const MainPage = () => {

    const classes = useStyles();

    return (

        <Grid container className={classes.spaceAround}>
            <Grid item>
            <img src={big_logo} className={classes.logo} />
            </Grid>
            <Grid item container direction={'row'} className={classes.spaceAround} spacing={2} xs={12}>
                <Grid item xs={12} md={4}>
                    <MainCard 
                    image={EatWellLogo} 
                    menuTitle={"eatWell"} 
                    description={"Nutrition Recipes - repository & search BMI Calculator / Fat, Carbs, Protein demand Diet plan"} />
                </Grid>
                <Grid item xs={12} md={4}>
                <MainCard image="https://via.placeholder.com/150" menuTitle="fitWell" />
                </Grid>
            </Grid>
            <Grid item container direction={'row'} className={classes.spaceAround}>
                <Grid item xs={12} md={4}>
                    <MainCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <MainCard />
                </Grid>
            </Grid>
        </Grid>

    )
}

export default MainPage
