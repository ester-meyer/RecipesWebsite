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
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';


export default function MenuAppBar() {

  const user = useSelector((state) => state.userSlice)
  const recipesSlice = useSelector((state) => state.RecipesSlice)

  const handleUser = () => {
    if (user.name == "not-connected")
      navigate('/SignUp')
  };

  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' , paddingRight: '10vh'}} >
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
          {user.name != "not-connected" &&
          <Link to='/Favorites'>
          <Badge badgeContent={recipesSlice.favoriteCount}  sx={{
            '& .MuiBadge-badge': {
              backgroundColor: 'rgb(251, 26, 93)',
              color: '#fff',
            }}}>
          <FavoriteIcon color="action" sx={{color: 'rgb(50, 50, 50)'}}/>
        </Badge>
        </Link>
          }
          <Link to='/RecipeList'>
          <Button variant="text" sx={{
            color: 'rgb(244, 18, 85)',
            ml: '20%',
            '&:hover': {
              backgroundColor: 'rgba(90, 89, 90, 0.2)',
              }
              }}>Recipes</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}