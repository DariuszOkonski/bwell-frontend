import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DietPlanContext } from '../eatwell/dietplan/context/DietPlanContext';
import BasicTable from './BasicTable';
import { EntryContainer } from './EntryContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  const { breakfast, lunch, dinner, supper } = useContext(DietPlanContext);


  return (
    // <div className={classes.root}>
      <EntryContainer>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography ><strong>Breakfast:</strong> {breakfast.header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            
            <BasicTable />

            </AccordionDetails>
        </Accordion>
        
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography ><strong>Lunch:</strong> {lunch.header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            
            <BasicTable />

            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography ><strong>Dinner:</strong> {dinner.header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            
            <BasicTable />

            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography ><strong>Supper:</strong> {supper.header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            
            <BasicTable />

            </AccordionDetails>
        </Accordion>
      
      </EntryContainer>
    // </div>
  );
}