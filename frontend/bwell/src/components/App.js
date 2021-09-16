import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import '@fontsource/lato';
import logo from '../assets/logo_large.png'
import background_img from '../assets/background_image2.png'
import logo_mini from '../assets/logo_footer.png'
import Grid from '@material-ui/core/Grid';
import MainPage from './MainPage';
import EatWellPage from './EatWellPage';
import FitWellPage from './FitWellPage';
import RestWellPage from './RestWellPage';
import ThinkWellPage from './ThinkWellPage';
import RepositoryIdeaPage from './RepositoryIdeaPage';
import LoginPage from './LoginPage';
import FavouritesPage from './FavouritesPage';

const styles = {
  mainContainer: {
    height: '100vh',
    justifyContent: 'space-between',
    backgroundColor: 'red'
  },

  bodyContainer: {
    flex: 1,
    backgroundImage: `url(${background_img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'auto'
  },

  paperContainer: {
    // backgroundImage: `url(${background_img})`,
  }
}

function App() {

  return (
    <Grid container direction={'column'} style={styles.mainContainer}>
      <Grid item>
        <Header logo={logo} />
      </Grid>
      <Grid item style={styles.bodyContainer}>
        <Grid container>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/register">
              <LoginPage register={true} />
            </Route>
            <Route path="/login">
              <LoginPage register={false} />
            </Route>
            <Route path="/eatWell">
              <EatWellPage
              // openMenu={openMenu} 
              // handleCloseMenu={handleCloseMenu}
              />
            </Route>
            <Route path="/fitWell">
              <FitWellPage />
            </Route>
            <Route exact path="/restWell">
              <RestWellPage />
            </Route>
            <Route path="/restWell/:id">
              <RepositoryIdeaPage repositoryType='restWell' />
            </Route>
            <Route exact path="/thinkWell">
              <ThinkWellPage />
            </Route>
            <Route path="/thinkWell/:id">
              <RepositoryIdeaPage repositoryType='thinkWell' />
            </Route>
            <Route path="/favourites">
              <FavouritesPage />
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
