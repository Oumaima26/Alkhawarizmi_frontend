import React, { useState } from 'react';
import {
  Grid,
  CssBaseline,
  Paper,
  Container,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  createTheme,
  ThemeProvider,
  Box,
  Button
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Header from '../layouts/Header';
import Menu from '../layouts/Menu';
import Footer from '../../layouts/Footer';
import axios from 'axios';
const theme = createTheme();
export default function AddPupil() {
  const nextPath = (path) => {
    window.location = path;
  }
  const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
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
    });
  };
  const [previewImage, setPreviewImage] = useState(null);
  const [date, setDate] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    getBase64(data.get('image'))
const user={
  email: data.get('email'),
  password: data.get('password'),
  first_name: data.get('firstName'),
  last_name: data.get('lastName'),
  photo: previewImage,
  cin: Number(data.get('cin')),
  domain: data.get('domain'),
  phone: Number(data.get('phone')),
  gender: data.get('gender'),
  date_birth: date,
  birthplace: data.get('place'),
  address: data.get('address'),
  role: 'teacher',
}
console.log((user))
    if (previewImage) {
      axios.post('http://localhost:5000/user/register', user)
        .then(res => {
          console.log(res.data)
          nextPath('/listteacher')
        })
        .catch(err => {
          console.log(err)
        });
    }

  };
  return (
    <>
      <Header />
      <Menu />
      <div className="content-wrapper" >
        <section className="content" >
          <div className="container-fluid" >
            <div className="row" >
              <ThemeProvider theme={theme} >
                <CssBaseline />
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
                  <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h3" variant="h4" align="center">
                      Add Teacher
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

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
                          <TextField
                            required
                            id="cin"
                            name="cin"
                            label="CIN"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="phone"
                            name="phone"
                            label="Phone Number"
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} >
                          <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            type='email'
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            type='password'
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="domain"
                            name="domain"
                            label="Domain"
                            fullWidth
                            autoComplete="shipping address-level2"
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
                              value={date}
                              onChange={(newDate) => setDate(newDate)}

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
                            id="address"
                            name="address"
                            label="Address"
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl>
                            <FormLabel
                              required>Photo</FormLabel>
                          </FormControl>
                          <TextField
                            fullWidth
                            name="image"
                            id="image"
                            type="file"
                          />
                        </Grid>
                      </Grid>

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Add Teacher
                      </Button>
                    </Box>

                  </Paper>
                </Container>
              </ThemeProvider>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}