import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './generic/Header';
import Footer from './generic/Footer';
import '@fontsource/lato';
import logo from '../assets/logo_large.png'
import background_img from '../assets/background_image2.png'
import logo_mini from '../assets/logo_footer.png'
import Grid from '@material-ui/core/Grid';
import MainPage from './mainpage/MainPage';
import EatWellPage from './eatwell/EatWellPage';
import FitWellPage from './fitwell/FitWellPage';
import RestWellPage from './restwell/RestWellPage';
import ThinkWellPage from './thinkwell/ThinkWellPage';
import { makeStyles } from '@material-ui/core';
import Recipe from './eatwell/Recipe';


const useStylesPages = makeStyles({
  categoriesBar: {
      justifyContent: "center",
      marginTop: "1rem"
  },
  spacearound: {
      justifyItems: 'space-around'
  },
  cards: {
      justifyContent: 'center',
      margin: '0'
  }
})

const styles = {
  mainContainer: {
    height: '100vh',
    // justifyContent: 'space-between',
    // backgroundColor: 'red'
  },

  bodyContainer: {
    flex: 1,
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',

    backgroundImage: `url(${background_img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'auto'
  },

  pageContainer: {
    justifyContent: 'center'
  },

  paperContainer: {
    // backgroundImage: `url(${background_img})`,
  }
}

function App() {

  // }


  return (
    <Grid container direction={'column'} style={styles.mainContainer}>
      <Grid item>
        <Header logo={logo} />
      </Grid>
      <Grid item style={styles.bodyContainer}>
        <Grid container style={styles.pageContainer} >
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/register">
              Register
            </Route>
            <Route exact path="/login">
              Login
            </Route>
            <Route exact path="/eatWell">
              <EatWellPage useStylesPages={useStylesPages} />
              </Route>
              <Route exact path="/fitWell">
                <FitWellPage useStylesPages={useStylesPages} />
              </Route>
              <Route exact path="/restWell">
                <RestWellPage useStylesPages={useStylesPages} />
              </Route>
              <Route exact path="/thinkWell">
                <ThinkWellPage useStylesPages={useStylesPages} />
              </Route>
              <Route exact path="/eatWell/recipe/1">
                <Recipe />
              </Route>
              <Route >
                Error Page 404
              </Route>
            </Switch>
        </Grid>
      </Grid>
      <Grid item>
        <Footer logo={logo_mini} />
      </Grid>
    </Grid>
  );
}

export default App;
