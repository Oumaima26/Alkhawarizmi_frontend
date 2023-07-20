import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import img from '../../logo/5.png'
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ height: "50px" }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            <img src={img} style={{ width: "50px", height: "50px", marginTop: "30px", top: "100px" }}></img>
          </Typography>
          <Button color="inherit">
            <Link href="/" color="inherit" underline="none"><i className="fas fa-home"  > </i> Home</Link>
          </Button>
          <Button color="inherit">
            <Link href="/parent/signin" color="inherit" underline="none"><i className="fas fa-sign-in-alt" > </i> SignIn</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
