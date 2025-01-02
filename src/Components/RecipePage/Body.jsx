import Stack from '@mui/joy/Stack';
// import Like from './Like'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/joy/IconButton';
import {useDispatch, useSelector} from 'react-redux'
import Typography from '@mui/joy/Typography';
import IngredientList from './IngredientList';
import { ToggleFavorite } from '../../Store/RecipesSlice';


export default function Body({recipe}){


  const dispatch = useDispatch()

  function handleToggleFavorite(id){
    dispatch(ToggleFavorite({id}))
  }
    return(
      <>
        <Stack sx={{ gap: 4, mt: 2 }}>    
          <IngredientList/>
              
              <IconButton
                    aria-label="FavoriteBorder"
                    variant="plain"
                    // color="neutral"
                    size='lg'
                    sx={{ 
                      position: 'absolute',
                      top: '1.5rem', right: '1.5rem' ,
                      color: recipe.isFavorite ? 'rgb(208, 0, 64)' : 'rgb(105, 103, 104)',
                      '&:hover':{
                        color: recipe.isFavorite ? 'rgb(208, 0, 64)' : 'rgb(90, 89, 90)',
                      }
                  }}
                  onClick={()=>{handleToggleFavorite(recipe.id)}}
                >
                      <FavoriteOutlinedIcon sx={{ zIndex:200000}}/>
                </IconButton>
                <Typography component="h1" level="h3" sx={{color:'rgb(208, 0, 64)'}} >
                  Instructions

              </Typography>
              {recipe.instructions}
          </Stack>
        </>
    )
}