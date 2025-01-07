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
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

export default function MenuAppBar() {

  const user = useSelector((state) => state.userSlice)

  const handleUser = () => {
    if (user.name == "not-connected")
      navigate('/SignUp')
  };

  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              src={Logo}
              style={{ height: '3em', display: 'block' }}
              alt="Logo"
            />
          </Link>
          <Tooltip title={user.name} arrow>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUser}
              sx={{ color: 'rgb(45, 45, 45)', marginLeft: '2%' }}

            >
              <AccountCircle style={{ height: '1em' }} />
            </IconButton>
          </Tooltip>
          <IconButton
            aria-label="FavoriteBorder"
            variant="plain"
            size="sm"
            sx={{
              color: 'rgb(208, 0, 64)',
              '&:hover': {
                color: 'rgb(208, 0, 64)',
              }
            }}
            onClick={() => { if (user.name == "not-connected")  alert("not-connected");
                            else{
                              navigate('/RecipeList', { state: { FevoriteMode: true } })}
                           }
                      }
          >
          <FavoriteOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    </Box >
  );
}