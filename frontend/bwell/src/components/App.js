import React from 'react';
import '../styles/App.css';
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

const styles = {
  mainContainer: {
    height: '100vh',
    justifyContent: 'space-between'
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
  // const [openMenu, setChangeMenu] = React.useState(false);

  // const handelOpenMenu = () => {
  //   setChangeMenu(true);
  //   console.log('open menu: ', openMenu)
  // }

  // const handleCloseMenu = () => {
  //   setChangeMenu(false)
  //   console.log('close menu: ', openMenu)
  // }


  return (
    <Grid container direction={'column'} style={styles.mainContainer}>
      <Grid item>
        <Header 
          logo={logo} 
          // handelOpenMenu={handelOpenMenu}
          // handleCloseMenu={handleCloseMenu}
          // openMenu={openMenu}
        />
      </Grid>
      <Grid item style={styles.bodyContainer}>
        <Grid container>
        <Switch>
          <Route exact path="/">
          <MainPage />
          </Route>
          <Route path="/register">
          Register
          </Route>
          <Route path="/login">
          Login
          </Route>
          <Route path="/eatWell">
            <EatWellPage 
              // openMenu={openMenu} 
              // handleCloseMenu={handleCloseMenu}
            />
          </Route>
          <Route path="/fitWell">
          fitWell
          </Route>
          <Route path="/restWell">
          restWell
          </Route>
          <Route path="/thinkWell">
          thinkWell
          </Route>
        </Switch>
        </Grid>
      </Grid>
      <Grid item>
        <Footer logo={logo_mini}/>
      </Grid>
    </Grid>
  );
}

export default App;
