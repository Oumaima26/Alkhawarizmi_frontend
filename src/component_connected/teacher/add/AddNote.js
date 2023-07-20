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
import { useLocation } from 'react-router-dom';
const theme = createTheme();
export default function AddSubject() {
    const nextPath = (path) => {
        window.location = path;
    }
    const [pupil, setPupil] = useState(null);
    const [subject, setSubject] = useState(null);
    const [pupils, setPupils] = useState([])
    const [subjects, setSubjects] = useState([])
    const handleChangePupil = (event) => {
        setPupil(event.target.value);
    }; const handleChangeSubject = (event) => {
        setSubject(event.target.value);
    };
    const location = useLocation();
    const level = location.pathname.split('/')[3];
    axios.get(`http://localhost:5000/pupil/afficher/level/`+level )
        .then(res => {
            setPupils(res.data)
        })
        .catch(err => {
            console.log(err)
        });
    axios.get(`http://localhost:5000/subject/afficher/level/`+level)
        .then(res => {
            setSubjects(res.data)
        })
        .catch(err => {
            console.log(err)
        });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:5000/note/add', {
            note1: Number(data.get('note1')),
            note2: Number(data.get('note2')),
            note3: Number(data.get('note3')),
            mean: Number(data.get('mean')),
            subject: subject,
            level: Number(level),
            pupil: pupil
        })
            .then(res => {
                nextPath('/teacher/listnote/')
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
                                            Add Note
                                        </Typography>
                                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                            <Grid container spacing={3}>
                                                <FormControl variant="standard" sx={{ m: 2, minWidth: "95%" }} xs={12} >
                                                    <InputLabel id="demo-simple-select-standard-label">Pupil</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-standard-label"
                                                        id="demo-simple-select-standard"
                                                        value={pupil}
                                                        name='pupil'
                                                        onChange={handleChangePupil}
                                                        label="Pupil"
                                                        required
                                                    >
                                                        {
                                                            pupils ? pupils.map(user => {
                                                                return (
                                                                    <MenuItem value={user._id}>{user.first_name} {user.last_name}</MenuItem>
                                                                )
                                                            }) : null
                                                        }
                                                    </Select>
                                                </FormControl>
                                                <FormControl variant="standard" sx={{ m: 2, minWidth: "95%" }} xs={12} >
                                                    <InputLabel id="demo-simple-select-standard-label">Subject</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-standard-label"
                                                        id="demo-simple-select-standard"
                                                        value={subject}
                                                        name='subject'
                                                        onChange={handleChangeSubject}
                                                        label="Subject"
                                                        required
                                                    >
                                                        {
                                                            subjects ? subjects.map(user => {
                                                                return (
                                                                    <MenuItem value={user._id}>{user.name}</MenuItem>
                                                                )
                                                            }) : null
                                                        }
                                                    </Select>
                                                </FormControl>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="note1"
                                                        label="Note 1"
                                                        name="note1"
                                                        fullWidth
                                                        autoComplete="given-name"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="note2"
                                                        label="Note 2"
                                                        name="note2"
                                                        fullWidth
                                                        autoComplete="given-name"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="note3"
                                                        label="Note 3"
                                                        name="note3"
                                                        fullWidth
                                                        autoComplete="given-name"
                                                        variant="standard"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="mean"
                                                        label="Mean"
                                                        name="mean"
                                                        fullWidth
                                                        autoComplete="given-name"
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
                                                Add Note
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