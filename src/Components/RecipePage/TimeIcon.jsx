import Typography from '@mui/joy/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useSelector } from 'react-redux';


export default function TimeIcon(recipe){

    //jast for now
    recipe = useSelector((state)=>state.RecipesSlice.recipes).find(recipe=>recipe.id==102)

    return(    
    <Typography component="h1" level="h3" sx={{  display: 'flex', justifyContent: 'space-between', marginTop:'13%'}}>
        <label sx={{color:'rgb(208, 0, 64)'}}>{recipe.name}</label>
        <label style={{display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'}}>
          {recipe.preparationTime} 
          <lable>
           minutes  
           </lable>  
          <AccessTimeFilledIcon sx={{color:'rgb(208, 0, 64)'}}/>
        </label>
    </Typography>)
}