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

/*import React, { useEffect, useState } from 'react';
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

  const getBase64 = file => {
    return new Promise(resolve => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        //console.log(baseURL);
        setPreviewImage(baseURL);
        resolve(baseURL);
      };
      // console.log(fileInfo);
    });
  };
  const [previewImage, setPreviewImage] = useState(null);
  const [date, setDate] = useState(null);
  const [first_name, setFirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [level, setLevel] = useState(null);
  const [gender, setGender] = useState(null);
  const [place, setPlace] = useState(null);
  const [image, setImage] = useState(null);

  const [data, setData] = useState([]);

  setData({

    first_name: first_name,
    last_name: last_name,
    photo: previewImage,
    level: Number(level),
    gender: gender,
    date_birth: date,
    birthplace: place,
  })
  localStorage.setItem('infopupil', JSON.stringify(data))



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
            onChange={(event) => { setFirstName(event.target.value); }}
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
            onChange={(event) => setLastName(event.target.value)}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel id="demo-row-radio-buttons-group-label" required>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            onChange={(event) => setGender(event.target.value)}
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
              onChange={(event) => setDate(event.target.value)}
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
            onChange={(event) => { setPlace(event.target.value); }}
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
            onChange={(event) => { setLevel(event.target.value); }}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="file"
            id="file"
            onChange={getBase64((event) => { setImage(event.target.value) })}
            type="file"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}*/