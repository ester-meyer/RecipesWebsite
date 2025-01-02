import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import Logo from '../Images/logo.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MenuAppBar() {

  const user = useSelector((state)=>state.userSlice)

  const handleUser = () => {
    if(user.name == "not-connected")
      navigate('/SignUp')
  };

  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
        <Toolbar>
          <Link to='/'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={Logo} style={{height:'2em'}} />
            {/* <MenuIcon /> */}
          </IconButton>
          </Link>
          <Tooltip title={user.name} arrow>
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
            </Tooltip>
              
          
        </Toolbar>
        </AppBar>
    </Box>
  );
}