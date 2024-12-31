// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import { useParams } from "react-router"


// export default function RecipeCard({id}){
//         const [recipe, setRecipe] = useState(null)
//         const reciepe=useSelector(slices=>slices.RecipesSlice).recipes.find(recipe => recipe.id === id)
//         useEffect(()=>{
//             setRecipe(reciepe)
//         })
//     return(
//         <div style={{width: '18vw', height: '60vh', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
//             <img src={image} style={{width: '100%', height: '40vh', objectFit: 'cover'}}/>
//         </div>
//     )
// }


import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function RecipeCard() {

    // const id = useParams().id;
    // alert(id)
    const recipe = useSelector((state)=>state.RecipesSlice.recipes).find(recipe=>recipe.id==100)

  return (
    <CssVarsProvider >
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s',
          },
        }}
      />
      
        


      <Box
        sx={() => ({
          width: { xs: '100%', md: '50vw' },
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
         
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100%',
            px: 2,
          }}
        >
          
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: 'hidden',
              },
            }}
          >
           
                <Typography component="h1" level="h3" sx={{  display: 'flex', justifyContent: 'space-between', marginTop:'13%'}}>
                  <label sx={{color:'rgb(208, 0, 64)'}}>{recipe.name}</label>

                  <label style={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    {recipe.preparationTime}    
                  <AccessTimeFilledIcon sx={{color:'rgb(208, 0, 64)'}}/>
                  </label>

                </Typography>
                

            
            <Divider >
             by:
            </Divider>
            <Stack sx={{ gap: 4, mt: 2 }}>
            {/* <ul>
      { recipe.ingredients.map((ingredient) => (
        <li><img src={recipe.image} alt="icon" style={{ width: '20px', height: '20px', marginRight: '10px' }} />{ingredient}</li>
      ))}
    </ul> */}     
    <Typography
        id="decorated-list-demo"
        level="body-xs"
        sx={{ textTransform: 'uppercase', fontWeight: 'lg', mb: 1 }}
      >
        Ingredients
      </Typography>
      <List aria-labelledby="decorated-list-demo" sx={{ /* מספר העמודות */
  columnGap: '20px', /* רווח בין העמודות */
  height: '300px', /* גובה מקסימלי */
  overflowY: 'auto'}}>
        
          {  recipe.ingredients.map((ingredient)=>(
          <ListItem>
            <ListItemDecorator><img src={recipe.image} alt="icon" style={{ width: '20px', height: '20px', marginRight: '10px' ,borderRadius:'50%'}} /></ListItemDecorator>{ingredient}
        </ListItem>
        ))}
       
      </List>

      <label>
        {recipe.Instructions}
      </label>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" sx={{ textAlign: 'center' }}>
              © YammY {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      


            
          {/* <LeftRecipeCard recipe={recipe}/> */}
 
         
      <Box
        sx={() => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '50vw' },
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:`url(${recipe.image})`
          
        })}
      />
    </CssVarsProvider>
  );
}