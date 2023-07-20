/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useState } from 'react';
//import ConnectedHeader from './ConnectedHeader';
import PasswordForm from './PasswordForm';
import '../css/auth.css'
import axios from 'axios';
function AuthForgot() {
    const nextPath = (path) => {
        window.location = path;
    }
    const emailref = useRef();
    const [otpFrom, showFrom] = useState(true)
    const sendOtp = async () => {
        const data = {
            email: emailref.current.value
        }
        console.log(data)
        axios.post('http://localhost:5000/user/email-send', data)
            .then((res) => {
                const record = res.data
                if (record.statusText === 'Success') {
                    console.log(record.message)
                    showFrom(false)
                }
                else {
                    console.log(record.message)
                }
            }).catch((err) => {
                console.log(err)
            });

    }
    return (
        <div style={{ backgroundColor: '#B3E5FC' }}>
            <div className="container" >
                <div className="card-items">
                    <div className="card-forgot">

                        {otpFrom ?
                            <>
                                <div className="block">
                                    <div className="input-t">
                                        <div className="top-login">
                                            <label className="text-forgot"><center>Forgot Password</center></label>
                                        </div>
                                        <div className="content">
                                            <input
                                                type="email"
                                                name='email'
                                                className="form__field"
                                                placeholder="Email"
                                                ref={emailref}
                                            />
                                        </div>
                                        <div className="footer-login ">
                                            <button className='btn-first' onClick={sendOtp}>Send</button>
                                        </div>
                                    </div>
                                    <div className="hrl"></div>
                                    <div className="align">
                                        <div className="create-account">
                                            <span className='log' onClick={() => nextPath('/signin')}>Log In</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <PasswordForm email={emailref.current.value} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}
export default AuthForgot;










/*


import React, { useRef, useState } from 'react';
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
import PasswordForm from './PasswordForm';
import axios from 'axios';
const theme = createTheme();
export default function ForgotPassword() {
    const nextPath = (path) => {
        window.location = path;
    }
    const [otpFrom, showFrom] = useState(true)
    const [email, setEmail] = useState(null)
    const sendOtp = async () => {
        const data = {
            email: email
        }
        console.log(data)
        axios.post('http://localhost:5000/user/email-send', data)
            .then((res) => {
                const record = res.data
                console.log(record)
                if (record.statusText === 'Success') {
                    console.log(record.message)
                    showFrom(false)
                }
                else {
                    console.log(record.message)
                }
            }).catch((err) => {
                console.log(err)
            });

    }
    return (
        <>
            <Navbar />


            {otpFrom ?

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
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Reset Password
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoFocus
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={sendOtp}
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

                :
                <PasswordForm email={email} />
            }
        </>
    );
}
*/