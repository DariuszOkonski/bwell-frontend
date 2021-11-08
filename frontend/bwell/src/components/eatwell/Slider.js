import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import { colors } from '../../utilities/utilities';

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "1.2rem",
    lineHeight: "0.2",
    display: "flex",
    color: colors.buttonPrimary,
    // position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width:50,
    height: "1rem",
    border: "none",
    paddingRight: "0.4rem"
  },
});

export default function ActivitySlider({updateCallback}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1.1);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    updateCallback("activityRatio", newValue)
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(1.0);
    } else if (value > 2.0) {
      setValue(2.0);
    }
  };

  return (
    <div className={classes.root}>
      
      <Grid container spacing={1} alignItems="center">
      <Grid item>
          
        </Grid>
        <Grid item>
            <LocalHotelIcon/>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            defaultValue={1.1}
            step={0.1}
            min={1.0}
            max={2.0}
          />
        </Grid>
        <Grid item>
            <DirectionsRunIcon/>
        </Grid>
        <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 0.1,
              min: 1.0,
              max: 2.0,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
      </Grid>
    </div>
  );
}