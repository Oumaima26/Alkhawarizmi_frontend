import React, { useState } from 'react';
import {
    Grid,
    CssBaseline,
    Container,
    TextField,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Typography,
    createTheme,
    ThemeProvider,
    Paper,
    Box,
    Link,
    Button,
    Divider,
    MenuItem,
    InputLabel,
    FormControl,
    Select
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Header from '../layouts/Header';
import Menu from '../layouts/Menu';
import Footer from '../../layouts/Footer';
import axios from 'axios';
const theme = createTheme();
export default function SignUpPupil() {
    const nextPath = (path) => {
        window.location = path;
    }
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
    const [level, setLevel] = useState(0);
    const handleChange = (event) => {
        setLevel(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        getBase64(data.get('image'))
        if (previewImage) {
            axios.post('http://localhost:5000/pupil/register', {
                password: data.get('password'),
                first_name: data.get('firstName'),
                last_name: data.get('lastName'),
                first_name_father: data.get('firstName_father'),
                last_name_father: data.get('lastName_father'),
                first_name_mother: data.get('firstName_mother'),
                last_name_mother: data.get('lastName_mother'),
                photo: previewImage,
                cin: Number(data.get('cin')),
                level: Number(level),
                phone: Number(data.get('phone')),
                gender: data.get('gender'),
                date_birth: date,
                birthplace: data.get('place'),
                address: data.get('address'),
            })
                .then(res => {
                    console.log(res.data)
                    nextPath('/listpupil')
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
                                        <Typography component="h3" variant="h4" align="center" >
                                            Add Pupil
                                        </Typography>
                                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                            <Divider  >
                                                <h3><i className="fa fa-user" /> Pupil Information</h3>
                                            </Divider>
                                            <Grid container spacing={2}>

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

                                                <FormControl variant="standard" sx={{ m: 2, minWidth: 220 }} xs={12} sm={6}>
                                                    <InputLabel id="demo-simple-select-standard-label">Level</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-standard-label"
                                                        id="demo-simple-select-standard"
                                                        value={level}
                                                        name='level'
                                                        onChange={handleChange}
                                                        label="Level"
                                                        required
                                                    >
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={6}>6</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        name="image"
                                                        id="image"
                                                        type="file"
                                                    />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Divider  >
                                                <h3>  <i className="fa fa-user-friends" /> Parent Information</h3>
                                            </Divider>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="firstName_father"
                                                        name="firstName_father"
                                                        label="Father's First Name"
                                                        fullWidth
                                                        autoComplete="given-name"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="lastName_father"
                                                        name="lastName_father"
                                                        label="Father's Last Name"
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
                                                        autoComplete="shipping country"
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
                                                        autoComplete="shipping country"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="firstName_mother"
                                                        name="firstName_mother"
                                                        label="Mother's First Name"
                                                        fullWidth
                                                        autoComplete="given-name"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="lastName_mother"
                                                        name="lastName-mother"
                                                        label="Mother's Last Name"
                                                        fullWidth
                                                        autoComplete="family-name"
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
                                                        autoComplete="shipping postal-code"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="password"
                                                        label="Password"
                                                        type="password"
                                                        id="password"
                                                        autoComplete="shipping postal-code"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Add Pupil
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
/*

                                            <br />
                                            <Divider  >
                                                <h3>  <i className="fa fa-credit-card" /> Payment</h3>
                                            </Divider>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        required
                                                        id="cardName"
                                                        name="cardName"
                                                        label="Name on card"
                                                        fullWidth
                                                        autoComplete="cc-name"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        required
                                                        id="cardNumber"
                                                        label="Card number"
                                                        fullWidth
                                                        autoComplete="cc-number"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        required
                                                        id="expDate"
                                                        name='expDate'
                                                        label="Expiry date"
                                                        fullWidth
                                                        autoComplete="cc-exp"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <TextField
                                                        required
                                                        id="cvv"
                                                        name='cvv'
                                                        label="CVV"
                                                        helperText="Last three digits on signature strip"
                                                        fullWidth
                                                        autoComplete="cc-csc"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                            </Grid>
                                            */