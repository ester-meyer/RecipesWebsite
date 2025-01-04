import * as React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FlatwareIcon from '@mui/icons-material/Flatware';
import { ToggleFavorite } from '../Store/RecipesSlice'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import AddRecipe from './AddRecipe'
import { styled } from '@mui/material/styles';
import RecipesListCard from './RecipesListCards';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function RecipesList() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box style={{
        height: '28vh',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
        <h1 style={{
          width: '100%',
          fontSize: '3em',
          textAlign: 'center',
          margin: '0',
        }}>
          Recipes
        </h1>
        <p style={{
          width: '30%',
          fontSize: '1em',
          textAlign: 'center',
          margin: '5px 0 0 0',
        }}>
          Discover rich cakes and creamy milkshakes. Simple steps, delicious results—make every moment a sweet celebration!
        </p>
        <Button
          variant="solid"
          size="lg"
          aria-label="Explore"
          onClick={()=>{handleClickOpen()} }
          sx={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '15vw',
            fontWeight: 600,
            backgroundColor: 'rgb(208, 0, 64)',
            '&:hover': {
              backgroundColor: 'rgb(251, 26, 93)',
            },
          }}
        >
          Add new recipe
        </Button>
      </Box>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add New Recipe
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <AddRecipe handleClose={handleClose}/>
        </DialogContent>
      </BootstrapDialog>
      <RecipesListCard/>
    </Box>
  );
}