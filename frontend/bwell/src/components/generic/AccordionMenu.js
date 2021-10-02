import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { endpoints } from '../../utilities/utilities';
import { Link } from 'react-router-dom';


export default function AccordionMenu({toggleDrawer, anchor}) {
  
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
              <li>
                <Link 
                to={endpoints.eatwell} 
                onClick={toggleDrawer(anchor, false)}
              >repository</Link>
              </li>
              <li>
              <Link 
            onClick={toggleDrawer(anchor, false)}
            to={endpoints.eatwell_calculator}>calculator</Link>
              </li>
              <li>
              <Link 
            onClick={toggleDrawer(anchor, false)}
            to={endpoints.eatwell_dietplan}>diet plan</Link>
              </li>
              <li>
              <Link 
            onClick={toggleDrawer(anchor, false)}
            to={endpoints.addEntry}>Add recipe</Link>
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
            <Link 
            onClick={toggleDrawer(anchor, false)}
            to={endpoints.fitwell}>repository</Link>
            <Link 
            onClick={toggleDrawer(anchor, false)}
            to={endpoints.addEntry}>Add activity</Link>
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
            <Link 
            onClick={toggleDrawer(anchor, false)}
            to={endpoints.restwell}>repository</Link>
            <Link 
            onClick={toggleDrawer(anchor, false)}
            to={endpoints.addEntry}>Add activity</Link>
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
            <Link 
            onClick={toggleDrawer(anchor, false)}
            to={endpoints.thinkwell}>repository</Link>
            <Link 
            onClick={toggleDrawer(anchor, false)}
            to={endpoints.addEntry}>Add activity</Link>
        </AccordionDetails>
      </Accordion>

      
    
    </div>
  );
}