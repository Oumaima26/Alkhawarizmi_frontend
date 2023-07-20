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
    InputLabel,
    Box,
    Link,
    Button,
    Avatar
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Navbar from './layouts/Navbar';
import axios from 'axios';
const theme = createTheme();
export default function SignUp() {
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
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        getBase64(data.get('image'))
        const user = {
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
            role: 'admin',
        }
        if (previewImage) {
            axios.post('http://localhost:5000/user/register', user)
                .then(res => {
                    if (res) {
                        nextPath('/signin')
                    }
                })
                .catch(err => {
                    if (err) {
                        nextPath('/signup')
                    }
                });
        }
    };
    return (
        <>
            <Navbar />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="cin"
                                        label="CIN"
                                        name="cin"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="domain"
                                        label="Domain"
                                        name="domain"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
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
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="phone"
                                        label="Phone Number"
                                        type="text"
                                        id="phone"
                                        autoComplete="new-password"
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
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="new-password"

                                    />
                                </Grid>

                                <Grid item xs={12} >
                                    <InputLabel required> Photo</InputLabel>
                                    <TextField
                                        required
                                        fullWidth
                                        name="image"
                                        type="file"
                                        id="image"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/signin" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                            <br />
                            <br />
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}