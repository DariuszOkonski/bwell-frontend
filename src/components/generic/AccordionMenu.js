import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { colors, endpoints } from '../../utilities/utilities';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


export default function AccordionMenu({toggleDrawer, anchor}) {
    const useStyles = makeStyles({
      li: {
        listStyleType: 'none',
        paddingLeft:'1.5rem',
        margin: '0.5rem 0'
      },
      a: {        
          color: `${colors.textPrimary}`,
          textDecoration: 'none',
          fontSize: '1rem'
      }
    })
    const classes = useStyles();
    

    return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>eatWell</Typography>
        </AccordionSummary>
        <AccordionDetails >
            <ul>
              <li className={classes.li}>
                <Link
                  className={classes.a} 
                  to={endpoints.eatwell} 
                  onClick={toggleDrawer(anchor, false)}
                >repository</Link>
              </li>
              <li className={classes.li}>
              <Link
                className={classes.a} 
                  onClick={toggleDrawer(anchor, false)}
                  to={endpoints.eatwell_calculator}
                >calculator</Link>
              </li>
              <li className={classes.li}>
                <Link
                  className={classes.a} 
                  onClick={toggleDrawer(anchor, false)}
                  to={endpoints.eatwell_dietplan}
                >diet plan</Link>
              </li>
              <li className={classes.li}>
                <Link
                  className={classes.a} 
                  onClick={toggleDrawer(anchor, false)}
                  to={endpoints.addEntry(endpoints.eatwell)}
                >add recipe</Link>
              </li>
            </ul>           

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>fitWell</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
              <li className={classes.li}>
                <Link
                  className={classes.a} 
                    onClick={toggleDrawer(anchor, false)}
                    to={endpoints.fitwell}
                >repository</Link>
              </li>
              <li className={classes.li}>
                <Link
                  className={classes.a} 
                    onClick={toggleDrawer(anchor, false)}
                    to={endpoints.addEntry(endpoints.fitwell)}
                >add activity</Link>
              </li>
            </ul>            
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>restWell</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
              <li className={classes.li}>
                <Link
                  className={classes.a} 
                    onClick={toggleDrawer(anchor, false)}
                    to={endpoints.restwell}
                >repository</Link>    
              </li>
              <li className={classes.li}>
                <Link
                  className={classes.a} 
                    onClick={toggleDrawer(anchor, false)}
                    to={endpoints.addEntry(endpoints.restwell)}
                >add activity</Link>
              </li>
            </ul>           
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>thinkWell</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ul>
              <li className={classes.li}>
                <Link
                  className={classes.a} 
                    onClick={toggleDrawer(anchor, false)}
                    to={endpoints.thinkwell}
                >repository</Link>
              </li>
              <li className={classes.li}>
                <Link
                  className={classes.a} 
                    onClick={toggleDrawer(anchor, false)}
                    to={endpoints.addEntry(endpoints.thinkwell)}
                replace >add activity</Link>
              </li>
            </ul>

            
            
        </AccordionDetails>
      </Accordion>

      
    
    </div>
  );
}