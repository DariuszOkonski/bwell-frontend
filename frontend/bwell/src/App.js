import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/generic/Header';
import Footer from './components/generic/Footer';
import '@fontsource/lato';
import logo from './assets/logo_large.png'
import background_img from './assets/background_image2.png'
import logo_mini from './assets/logo_footer.png'
import Grid from '@material-ui/core/Grid';
import MainPage from './components/mainpage/MainPage';
import EatWellPage from './components/eatwell/EatWellPage';
import FitWellPage from './components/fitwell/FitWellPage';
import RestWellPage from './components/restwell/RestWellPage';
import ThinkWellPage from './components/thinkwell/ThinkWellPage';
import { makeStyles } from '@material-ui/core';
import Recipe from './components/eatwell/Recipe';
import Activity from './components/fitwell/Activity';
import { endpoints, modules } from './utilities/utilities';
import LoginPage from './components/LoginPage';
import RepositoryIdeaPage from './components/RepositoryIdeaPage';
import FavouritesPage from './components/favourites/FavouritesPage';
import Calculator from './components/eatwell/Calculator';
import AddEntry from './components/entrycreator/AddEntry';
import EntryCreatorContextProvider from './components/entrycreator/contexts/EntryCreatorContext';
import ErrorPage from './components/reuseable/ErrorPage';
import DietPlanPage from './components/eatwell/dietplan/DietPlanPage';
import DietPlanContextProvider from './components/eatwell/dietplan/context/DietPlanContext';
import OAuth2RedirectHandler from './oauth2/oauth2/OAuth2RedirectHandler';
import PrivateRoute from './oauth2/PrivateRoute';
import { getCurrentUser } from './oauth2/util/APIUtils';
import { ACCESS_TOKEN } from './oauth2/constants';

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
  },
  mainContainer: {
    height: '100vh',
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
})

function App(props) {

  const classes = useStylesPages();
    const [state, setState] = useState({
      currentUser: null,
      loading: false,
      authenticated: false,
    })


    const loadCurrentlyLoggedInUser = ()=> {
      setState({
        loading: true
      });
  
      getCurrentUser()
        .then(response => {
          setState({
            currentUser: response,
            authenticated: true,
            loading: false
          });
        })
        .catch(error => {
          setState({
            loading: false
          });
        });
    }
  
   const  handleLogout = ()=> {
      localStorage.removeItem(ACCESS_TOKEN);
      setState({
        authenticated: false,
        currentUser: null
      });
      // Alert.success("You're safely logged out!");
    }
  
    useEffect(() => {
      loadCurrentlyLoggedInUser()
    }, [])
    return (
      <Grid container direction={'column'} className={classes.mainContainer}>
        <Grid item>
          <Header logo={logo} />
        </Grid>
        <Grid item className={classes.bodyContainer}>
          <Grid container className={classes.pageContainer}>
            <Switch>
              <Route exact path={endpoints.main}>
                <MainPage />
              </Route>
              <Route exact path={endpoints.register}>
                <LoginPage register={true} />
              </Route>
              <Route exact path={endpoints.login}>
                <LoginPage register={false} />
              </Route>
              <Route exact path={endpoints.eatwell} render={
                (props) => <EatWellPage useStylesPages={useStylesPages} {...props} />} />

              <Route exact path={`${endpoints.eatwell_recipe}:id`} render={
                (props) => <Recipe {...props} />} />

              <Route exact path={endpoints.eatwell_calculator} render={
                (props) => <Calculator useStylesPages={useStylesPages} />} />


              <Route exact path={endpoints.fitwell} render={
                (props) => <FitWellPage useStylesPages={useStylesPages} {...props} />} />


              <Route exact path={endpoints.restwell} render={
                (props) => <RestWellPage useStylesPages={useStylesPages} {...props} />} />


              <Route exact path={endpoints.thinkwell} render={
                (props) => <ThinkWellPage useStylesPages={useStylesPages} {...props} />} />




              

              <Route exact path={`${endpoints.fitwell_activity}:id`}>
                <Activity />
              </Route>
              <Route path={`${endpoints.restwell_idea}:id`}>
                <RepositoryIdeaPage repositoryType='restWell' />
              </Route>
              <Route path={`${endpoints.thinkwell_idea}:id`}>
                <RepositoryIdeaPage repositoryType='thinkWell' />
              </Route>
              <Route path={endpoints.favourites}>
                <FavouritesPage />
              </Route>


              <PrivateRoute path={[
                `/${modules.eatWell.name}/addEntry`,
                `/${modules.fitWell.name}/addEntry`,
                `/${modules.thinkWell.name}/addEntry`,
                `/${modules.restWell.name}/addEntry`,
                ]}
                authenticated={state.authenticated}
                currentUser={state.currentUser}
                component={AddEntry}
                />
                   
              
              <Route path={`/${modules.eatWell.name}/dietplan`}>
                <DietPlanContextProvider>
                  <DietPlanPage />
                </DietPlanContextProvider>
              </Route>
            
              
              <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
              <Route >
                <ErrorPage />
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
