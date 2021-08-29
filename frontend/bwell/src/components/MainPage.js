import { Paper } from "@material-ui/core";
import big_logo from "../assets/logo_large.png";
import { Grid } from "@material-ui/core";
import MainCard from "./MainCard"
import EatWellLogo from "../assets/menu_eatwell.png"

const MainPage = () => {
    return (

        <Grid container style={{ textAlign: 'center', justifyContent: 'space-around' }}>
            <img src={big_logo} style={{ height: '150px' }} />
            <Grid item container direction={'row'} style={{ justifyContent: 'space-around' }}>
                <Grid item xs={12} md={4}>
                    <MainCard 
                    image={EatWellLogo} 
                    menuTitle="eatWell" 
                    description="Nutrition Recipes - repository & search BMI Calculator / Fat, Carbs, Protein demand Diet plan" />
                </Grid>
                <Grid item xs={12} md={4}>
                <MainCard image="https://via.placeholder.com/150" menuTitle="fitWell" />
                </Grid>
            </Grid>
            <Grid item container direction={'row'} style={{ justifyContent: 'space-around' }}>
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
