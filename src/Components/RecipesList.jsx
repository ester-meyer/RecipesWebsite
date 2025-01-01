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
import {ToggleFavorite} from '../Store/RecipesSlice'
import { useDispatch } from 'react-redux';
export default function RecipesList() {
  const dispatch = useDispatch();
    const reciepes=useSelector(slices=>slices.RecipesSlice).recipes;
    function handleToggleFavorite(id){
      dispatch(ToggleFavorite({id}))
    }
  return (
    <>
      <div style={{
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
      </div>

      <div  style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '20px' }}>
        {reciepes.map((item, index)=>{
          return(
            <Card  key={index} sx={{ width: 320 }}>
              <div>
                <Typography level="title-lg"><b>{item.name}</b></Typography>
                  <IconButton
                    aria-label="FavoriteBorder"
                    variant="plain"
                    // color="neutral"
                    size="sm"
                    sx={{ position: 'absolute',
                      top: '0.875rem', right: '0.5rem' ,
                      color: item.isFavorite ? 'rgb(208, 0, 64)' : 'rgb(105, 103, 104)',
                      '&:hover':{
                        color: item.isFavorite ? 'rgb(208, 0, 64)' : 'rgb(90, 89, 90)',
                      }
                    }}
                    onClick={()=>handleToggleFavorite(item.id)}
                  >
                    <FavoriteOutlinedIcon />
                  </IconButton>
              </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
              <img
                src={item.image}
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs" style={{display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <QueryBuilderIcon/>
                  {item.preparationTime}
                  <label>minutes</label>
                </Typography>
                <Typography level="body-xs" style={{display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FlatwareIcon/>
                    {item.category}
                  </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                aria-label="Explore"
                sx={{ ml: 'auto',
                  alignSelf: 'center',
                    fontWeight: 600,
                    backgroundColor: 'rgb(208, 0, 64)',
                    '&:hover': {
                      backgroundColor: 'rgb(251, 26, 93)',
                    }, }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
          )
        })}
      </div>
    </>
  );
}