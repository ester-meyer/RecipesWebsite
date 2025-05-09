import Stack from '@mui/joy/Stack';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/joy/IconButton';
import {useDispatch, useSelector} from 'react-redux'
import Typography from '@mui/joy/Typography';
import IngredientList from './IngredientList';
import { ToggleFavorite } from '../../Store/RecipesSlice';
import { useParams } from 'react-router-dom';


export default function Body(){

    const id = useParams().id;
    const recipe = useSelector((state)=>state.RecipesSlice.recipes).find(recipe=>recipe.id==id)
      const user = useSelector((state) => state.userSlice)
    

  const dispatch = useDispatch()

  function handleToggleFavorite(id){
    dispatch(ToggleFavorite({id}))
  }
    return(
      <>
        <Stack sx={{ gap: 4, mt: 2}}>    
          <IngredientList/>
              <IconButton
                    aria-label="FavoriteBorder"
                    variant="plain"
                    size='lg'
                    disabled={user.name=="not-connected"}
                    sx={{
                      position: 'absolute',
                      top: '3rem', right: '1.5rem' ,
                  }}
                  onClick={()=>{handleToggleFavorite(recipe.id)}}
                >
                      <FavoriteOutlinedIcon sx={{ 
                        color: recipe.isFavorite ? 'rgb(208, 0, 64) !important' : 'rgb(105, 103, 104)',
                        '&:hover':{
                        color: recipe.isFavorite ? 'rgb(208, 0, 64)' : 'rgb(90, 89, 90)',
                      }}}/>
                </IconButton>
                <Typography component="h1" level="h3" sx={{color:'rgb(208, 0, 64)'}} >
                  Instructions
              </Typography>
              {recipe.instructions}
          </Stack>
        </>
    )
}