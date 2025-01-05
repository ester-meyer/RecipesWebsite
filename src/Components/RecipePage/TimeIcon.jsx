import Typography from '@mui/joy/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function TimeIcon() {

  const id = useParams().id;
  const recipe = useSelector((state) => state.RecipesSlice.recipes).find(recipe => recipe.id == id)

  return (
    <Typography component="h1" level="h3" sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '13%' }}>
      <label sx={{ color: 'rgb(208, 0, 64)' }}>{recipe.name}</label>
      <label style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {recipe.preparationTime}
        <lable>
          minutes
        </lable>
        <AccessTimeFilledIcon sx={{ color: 'rgb(208, 0, 64)' }} />
      </label>
    </Typography>)
}