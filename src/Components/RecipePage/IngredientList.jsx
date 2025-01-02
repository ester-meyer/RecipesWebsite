import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import { useSelector } from 'react-redux';


export default function IngredientList({recipe}) {

    //jast for now
    recipe = useSelector((state)=>state.RecipesSlice.recipes).find(recipe=>recipe.id==102)
    
  return (<>
    <Typography component="h1" level="h3" sx={{color:'rgb(208, 0, 64)'}} >
      Ingredients
    </Typography>
    <List aria-labelledby="decorated-list-demo" sx={{ columnGap: '20px', height: '300px', overflowY: 'auto' }}>
      {recipe.ingredients.map((ingredient) => (
        <ListItem>
          <ListItemDecorator><RiceBowlIcon sx={{ color: 'rgb(208, 0, 64)' }} /></ListItemDecorator>{ingredient}
        </ListItem>
      ))}
    </List>
  </>)
}