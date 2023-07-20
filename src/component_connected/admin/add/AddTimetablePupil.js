import React, { useState } from 'react';
import {
    Grid,
    CssBaseline,
    Paper,
    Container,
    TextField,
    FormControl,
    FormLabel,
    Typography,
    createTheme,
    ThemeProvider,
    Box,
    Button,
    MenuItem,
    InputLabel,
    Select
} from '@mui/material';
import Header from '../layouts/Header';
import Menu from '../layouts/Menu';
import Footer from '../../layouts/Footer';
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom';
const theme = createTheme();
export default function AddTimetable() {
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
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [level, setLevel] = useState(0);
    const handleChange = (event) => {
        setLevel(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        getBase64(data.get('timetable'))
        console.log({
            timetable: previewImage,
            level: Number(level)
        })
        if(previewImage){
            console.log(previewImage)
            axios.post('http://localhost:5000/timetablepupil/add', {
            timetable: previewImage,
            level: Number(level)
        })
            .then(res => {
                console.log(res.data)
                nextPath('/timetablepupil')
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
                                            Add Teacher Timetable
                                        </Typography>
                                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>


                                            <Grid container spacing={3}>
                                                <FormControl variant="standard" sx={{ m: 3, minWidth: "96%" }} >
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
                                                    <FormControl>
                                                        <FormLabel
                                                            required>Timetable</FormLabel>
                                                    </FormControl>
                                                    <TextField
                                                        fullWidth
                                                        name="timetable"
                                                        id="timetable"
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
                                                Add Timetable
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