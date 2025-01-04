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
export default function REcipesListCard(){

     const navigate = useNavigate()
      const dispatch = useDispatch();
      const reciepes = useSelector(slices => slices.RecipesSlice).recipes;
      const nevigate = useNavigate()
      function handleToggleFavorite(id) {
        dispatch(ToggleFavorite({ id }))
      }
    return(

    <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '20px' }}>
            {reciepes.map((recipe, index) => {
              return (
                <Card key={index} sx={{ width: 320 }}>
                  <div>
                    <Typography level="title-lg"><b>{recipe.name}</b></Typography>
                    <IconButton
                      aria-label="FavoriteBorder"
                      variant="plain"
                      size="sm"
                      sx={{
                        position: 'absolute',
                        top: '0.875rem', right: '0.5rem',
                        color: recipe.isFavorite ? 'rgb(208, 0, 64)' : 'rgb(105, 103, 104)',
                        '&:hover': {
                          color: recipe.isFavorite ? 'rgb(208, 0, 64)' : 'rgb(90, 89, 90)',
                        }
                      }}
                      onClick={() => handleToggleFavorite(recipe.id)}
                    >
                      <FavoriteOutlinedIcon />
                    </IconButton>
                  </div>
                  <AspectRatio minHeight="120px" maxHeight="200px">
                    <img
                      src={recipe.image}
                    />
                  </AspectRatio>
                  <CardContent orientation="horizontal">
                    <div>
                      <Typography level="body-xs" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <QueryBuilderIcon />
                        {recipe.preparationTime}
                        <label>minutes</label>
                      </Typography>
                      <Typography level="body-xs" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FlatwareIcon />
                        {recipe.category}
                      </Typography>
                    </div>
                    <Button
                      onClick={() => { navigate(`/RecipeList/${recipe.id}`) }}
                      variant="solid"
                      size="md"
                      aria-label="Explore"
                      sx={{
                        ml: 'auto',
                        alignSelf: 'center',
                        fontWeight: 600,
                        backgroundColor: 'rgb(208, 0, 64)',
                        '&:hover': {
                          backgroundColor: 'rgb(251, 26, 93)',
                        },
                      }}
                    >
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </Box>
)}