import * as React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FlatwareIcon from '@mui/icons-material/Flatware';
import { ToggleFavorite } from '../Store/RecipesSlice'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
export default function RecipesList() {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const reciepes = useSelector(slices => slices.RecipesSlice).recipes;
  function handleToggleFavorite(id) {
    dispatch(ToggleFavorite({ id }))
  }
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
          margin: '0', // ביטול מרווח מובנה של הכותרת
        }}>
          Recipes
        </h1>
        <p style={{
          width: '30%',
          fontSize: '1em',
          textAlign: 'center',
          margin: '5px 0 0 0', // מרווח עליון מינימלי לפסקה
        }}>
          Discover rich cakes and creamy milkshakes. Simple steps, delicious results—make every moment a sweet celebration!
        </p>
        <Button
          variant="solid"
          size="lg"
          aria-label="Explore"
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

      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '20px' }}>
        {reciepes.map((recipe, index) => {
          return (
            <Card key={index} sx={{ width: 320 }}>
              <div>
                <Typography level="title-lg"><b>{recipe.name}</b></Typography>
                <IconButton
                  aria-label="FavoriteBorder"
                  variant="plain"
                  // color="neutral"
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
                  alt=""
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
                onClick={()=>{recipe =reciepes.find(recipe=>recipe.id == recipe.id); alert(JSON.stringify(recipe))
                 navigate(`/RecipeList/${recipe.id}`)}}
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
    </Box>
  );
}