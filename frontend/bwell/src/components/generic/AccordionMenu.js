import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { endpoints } from '../../utilities/utilities';
import { Link } from 'react-router-dom';


export default function AccordionMenu(props) {
  console.log(props)
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
            <div onKeyDown={() => props.toggleDrawer(props.anchor, false)} onClick={() => props.toggleDrawer(props.anchor, false)}  >
                <Link to={endpoints.eatwell}>repository</Link>
            </div>
            <Link to={endpoints.eatwell_calculator}>calculator</Link>
            <Link to={endpoints.eatwell_dietplan}>diet plan</Link>
            <Link to={endpoints.addEntry}>Add recipe</Link>
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
            <Link to={endpoints.fitwell}>repository</Link>
            <Link to={endpoints.addEntry}>Add activity</Link>
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
            <Link to={endpoints.restwell}>repository</Link>
            <Link to={endpoints.addEntry}>Add activity</Link>
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
            <Link to={endpoints.thinkwell}>repository</Link>
            <Link to={endpoints.addEntry}>Add activity</Link>
        </AccordionDetails>
      </Accordion>

      
    
    </div>
  );
}