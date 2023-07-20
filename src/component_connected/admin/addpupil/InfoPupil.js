import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
export default function InfoPupil() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>            
        <Grid item xs={12} sm={6}>
          <FormLabel id="demo-row-radio-buttons-group-label" required>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              required
              fullWidth
              id="date"
              name="date"
              variant="standard"
              label="Date of birth"
              format="M/D/YYYY"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="place"
            name="place"
            label="Birthplace"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>     
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="level"
            name="level"
            label="Level"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>     
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="file"
            id="file"
            type="file"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}