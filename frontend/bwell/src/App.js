import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import '@fontsource/lato';
import logo from './assets/logo_large.png'
import background_img from './assets/background_image2.png'
import logo_mini from './assets/logo_footer.png'
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { height } from '@material-ui/system';
import MainPage from './components/MainPage';

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
  return (
    <Grid container direction={'column'} style={styles.mainContainer}>
      <Grid item>
        <Header logo={logo} />
      </Grid>
      <Grid item style={styles.bodyContainer}>
        <Grid container>
          <MainPage />
        </Grid>
      </Grid>
      <Grid item>
        <Footer logo={logo_mini}/>
      </Grid>
    </Grid>
  );
}

export default App;
