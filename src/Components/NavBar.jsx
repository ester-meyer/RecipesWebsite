import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logo from '../Images/logo.png'

export default function MenuAppBar() {



  const handleLogo = (event) => {
  };

  const handleUser = () => {
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleLogo}
            sx={{ mr: 2 }}
          >
            <img src={Logo} style={{height:'2em'}} />
            {/* <MenuIcon /> */}
          </IconButton>
   
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleUser}
                color="red"
              >
                <AccountCircle style={{height:'1em'}}/>
              </IconButton>
              
          
        </Toolbar>
        </AppBar>
    </Box>
  );
}