
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import {useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import TimeIcon from './RecipePage/TimeIcon'
import Body from './RecipePage/Body';
import { useEffect } from 'react';


export default function RecipeCard() {

  const navigate = useNavigate()
    const id = useParams().id;
    const recipe = useSelector((state)=>state.RecipesSlice.recipes).find(recipe=>recipe.id==id)


    useEffect(() => {
      if (recipe == undefined) {
        navigate('/*'); // מעביר לעמוד 404 אם המתכון לא נמצא
      } else {
        window.scrollTo(0, 0); // גולל למעלה אם המתכון נמצא
      }
    }, [recipe, navigate]);


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
            <TimeIcon recipr={recipe}/>      
            <Divider >
              {recipe.category}
            </Divider>
            <Body/>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" sx={{ textAlign: 'center' }}>
              © YummY {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      
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