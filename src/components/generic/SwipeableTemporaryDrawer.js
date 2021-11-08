import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { ThumbUpOutlined } from '@material-ui/icons';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import logo from '../../assets/logo_large.png';
import { viewportSize, colors } from '../../utilities/utilities';
import { Link } from 'react-router-dom';
import AccordionMenu from './AccordionMenu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  logo: {
    marginLeft: '1em',
    width: '4rem',
    [`@media(min-width: ${viewportSize.mobileL})`]: {
      width: '6rem'
    }
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <img src={logo} className={classes.logo} />
        </List>
        <Divider />
        {/* <List>
          <ListItem button key={'eatWell'} component={Link} to="/eatWell">
            <ListItemIcon><ThumbUpOutlined /></ListItemIcon>
            <ListItemText primary={'eatWell'} />
          </ListItem>
          <ListItem button key={'fitWell'} component={Link} to="/fitWell">
            <ListItemIcon><DirectionsBikeIcon /></ListItemIcon>
            <ListItemText primary={'fitWell'} />
          </ListItem>
          <ListItem button key={'thinkWell'} component={Link} to="/thinkWell">
            <ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'thinkWell'} />
          </ListItem>
          <ListItem button key={'restWell'} component={Link} to="/restWell">
            <ListItemIcon><WeekendOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'restWell'} />
          </ListItem>
        </List> */}
        
      </div>
      

  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {/* {anchor} */}
            <MenuIcon style={{ color: 'white', fontSize: '2rem' }} />
          </Button>
          
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}


            <AccordionMenu toggleDrawer={toggleDrawer} anchor={anchor}/>
          </SwipeableDrawer>


        </React.Fragment>
      ))}
    </div>
  );
}