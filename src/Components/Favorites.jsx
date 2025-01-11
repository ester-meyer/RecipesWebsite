import * as React from 'react';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
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
          Favorites
        </h1>
        <p style={{
          width: '30%',
          fontSize: '1em',
          textAlign: 'center',
          margin: '5px 0 0 0',
        }}>
          Here are our best recipes, it's gonna be delicious🤤...
        </p>
      </Box>
      <RecipesListCard FevoriteMode={true}/>
    </Box>
  );
}