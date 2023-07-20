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
import Header from '../layouts/Header';
import Menu from '../layouts/Menu';
import Footer from '../../layouts/Footer';
import axios from 'axios';
const theme = createTheme();
export default function AddSubject() {
    const nextPath = (path) => {
        window.location = path;
    }
    const [level, setLevel] = useState(0);
    const [Teachers, setTeachers] = useState([])
    const [teacher, setTeacher] = useState(null)
    const handleChangeLevel = (event) => {
        setLevel(event.target.value);
    };
    const handleChangeTeacher = (event) => {
        setTeacher(event.target.value);
    };
    axios.get('http://localhost:5000/user/teacher')
        .then(res => {
            setTeachers(res.data)

        })
        .catch(err => {
            console.log(err)
        });
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            level: Number(level),
        })
        axios.post('http://localhost:5000/subject/add', {
            name: data.get('name'),
            level: Number(level),
        })
            .then(res => {
                console.log(res.data)
                nextPath('/listsubject')
            })
            .catch(err => {
                console.log(err)
            });
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
                                            Add Subject
                                        </Typography>
                                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                            <Grid container spacing={2}>

                                                <Grid item xs={12} >
                                                    <TextField
                                                        required
                                                        id="name"
                                                        name="name"
                                                        label="Name Subject"
                                                        fullWidth
                                                        autoComplete="given-name"
                                                        variant="standard"
                                                    />
                                                </Grid>

                                                <FormControl variant="standard" sx={{ m: 2, minWidth: "95%" }} xs={12} >
                                                    <InputLabel id="demo-simple-select-standard-label">Level</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-standard-label"
                                                        id="demo-simple-select-standard"
                                                        value={level}
                                                        name='level'
                                                        onChange={handleChangeLevel}
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
                                            </Grid>
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Add Subject
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

                                                <FormControl variant="standard" sx={{ m: 2, minWidth: "95%" }} xs={12} >
                                                    <InputLabel id="demo-simple-select-standard-label">Teacher</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-standard-label"
                                                        id="demo-simple-select-standard"
                                                        value={teacher}
                                                        name='teacher'
                                                        onChange={handleChangeTeacher}
                                                        label="Teacher"
                                                        required
                                                    >
                                                        {Teachers ? Teachers.map(user => {
                                                            return (
                                                                <MenuItem value={user._id}>{user.first_name} {user.last_name}</MenuItem>

                                                            )
                                                        }) : null}
                                                    </Select>
                                                </FormControl>
                                                */