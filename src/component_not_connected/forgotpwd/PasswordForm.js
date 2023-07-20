import React, { useState } from 'react';
import axios from 'axios';
import '../css/auth.css'
export default function PasswordForm(props) {
    const nextPath = (path) => {
        window.location = path;
    }
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    //error

    const [errpassword, setErrPassword] = useState('');
    const [errcpassword, setErrCPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()

        if (validForm()) {
            const data = {
                password: password,
                email: props.email
            }
            console.log('data :', data);
            axios.post('http://localhost:5000/user/change-password', data)
                .then((res) => {
                    console.log(res.data.message)
                    setError(res.data.message)
                    nextPath('/teacher/signin')
                }).catch((err) => {
                    setError(err.data.message)
                });
        } else {
            console.log("Error")
        }
    }

    const validForm = () => {
        let formIsValid = true
        setErrPassword('');
        setErrCPassword('');
        setError('');
        if (password === "") {
            formIsValid = false
            setErrPassword("password is required!");
        }
        if (password.length < 6) {
            formIsValid = false
            setErrPassword("Password must be 6 char!");
        }
        if (cpassword === "") {
            formIsValid = false
            setErrCPassword("Confirm password is required!");
        }
        if (cpassword.length < 6) {
            formIsValid = false
            setErrCPassword("Confirm password must be 6 char!");
        }
        if (password !== cpassword) {
            formIsValid = false
            setError("Password and Confirm password are not matching!");
        }
        if (password === "") {
            formIsValid = false
            setError("password is required!");
        } else
            if (password.length < 6) {
                formIsValid = false
                setError("Password must be 6 char!");
            } else
                if (cpassword === "") {
                    formIsValid = false
                    setError("Confirm password is required!");
                } else
                    if (cpassword.length < 6) {
                        formIsValid = false
                        setError("Confirm password must be 6 char!");
                    } else
                        if (password !== cpassword) {
                            formIsValid = false
                            setError("Password and Confirm password are not matching!");
                        }
        return formIsValid;
    }
    return (
        <div className="block">
            <div className="input-t">
                <div className="top-login" >
                    <label className="text">
                        <center>Change Password</center>
                    </label>
                </div>
                {error}
                <div className="content">
                    <div className="form_input">
                        <div className="two">
                            <input
                                type={!passShow ? "password" : "text"}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                name="password"
                                id="password"
                                placeholder='Password' />
                            <div
                                className="showpass"
                                onClick={() => setPassShow(!passShow)}>
                                {!passShow ?
                                    <a>
                                        <i className="fas fa-eye-slash" />
                                    </a>
                                    :
                                    <a>
                                        <i className="fas fa-eye" />
                                    </a>
                                }
                            </div>

                        </div>
                    </div>
                    {
                        errpassword.length > 0 && <span style={{ color: 'red' }}>{errpassword}</span>
                    }
                    <div className="form_input">
                        <div className="two">
                            <input
                                type={!cpassShow ? "password" : "text"}
                                onChange={(event) => {
                                    setCPassword(event.target.value);
                                }}
                                name="cpassword"
                                id="cpassword"
                                placeholder='Confirm Password' />
                            <div
                                className="showpass"
                                onClick={() => setCPassShow(!cpassShow)}>
                                {!cpassShow ?
                                    <a>
                                        <i className="fas fa-eye-slash" />
                                    </a>
                                    :
                                    <a>
                                        <i className="fas fa-eye" />
                                    </a>
                                }
                            </div>

                        </div>
                    </div>
                    {
                        errcpassword.length > 0 && <span style={{ color: 'red' }}>{errcpassword}</span>
                    }
                </div>
                <div className="footer-login ">
                    <button className='btn-first' onClick={handleSubmit}>Change Password</button >
                </div>
            </div>
            <div className="hrl"></div>
            <div className="align">
                <div className="create-account">
                    <span onClick={() => nextPath('/')}>Back</span>
                </div>
            </div>
        </div>
    )

}








/*import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './layouts/Navbar';
import axios from 'axios';
const theme = createTheme();
export default function PasswordForm(props) {
    const nextPath = (path) => {
        window.location = path;
    }
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');


    const [error, setError] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()

        if (validForm()) {
            const data = {
                password: password,
                email: props.email
            }
            console.log('data :', data);
            axios.post('http://localhost:5000/user/change-password', data)
                .then((res) => {
                    console.log(res.data.message)
                    setError(res.data.message)
                    nextPath('/')
                }).catch((err) => {
                    setError(err.data.message)
                });
        } else {
            console.log("Error")
        }
    }

    const validForm = () => {
        let formIsValid = true
        if (password !== cpassword) {
            formIsValid = false
            setError("Password and Confirm password are not matching!");
        }
        return formIsValid;
    }
    return (
        <>
            <Navbar />

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        {error}
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Reset Password
                        </Typography>
                        <Box  noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                autoFocus
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Comfirm Password"
                                name="cpassword"
                                autoFocus
                                onChange={(event) => {
                                    setCPassword(event.target.value);
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Send
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/signin" variant="body2"> Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}
*/