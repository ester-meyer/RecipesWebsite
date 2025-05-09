import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../Components/TwoSidedLayout';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {

  const user = useSelector((state) => state.userSlice)
  const navigate = useNavigate()
  return (
    <CssVarsProvider disableTransitionOnChang>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
      >
        <TwoSidedLayout>
          <Typography color="primary" sx={{ fontSize: 'lg', fontWeight: 'lg', color: 'rgb(208, 0, 64)' }}>
            The power to do more
          </Typography>
          <Typography
            level="h1"
            sx={{
              fontWeight: 'xl',
              fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
            }}
          >
            GOOD THINGS ARE BAKED HERE.
            <br />
            YUMMY.
          </Typography>
          <Typography
            textColor="text.secondary"
            sx={{ fontSize: 'lg', lineHeight: 'lg' }}
          >
            Here you gonna find a whole world of the easiest, tastiest and most successful recipes
          </Typography>
          <Button
            onClick={() => { navigate('/RecipeList') }}
            size="lg" sx={{
              backgroundColor: 'rgb(208, 0, 64)',
              '&:hover': {
                backgroundColor: 'rgb(251, 26, 93)'

              }
            }}>
            Get Started
          </Button>
          {user.name == "not-connected" &&
          <Typography>
            New user? <Link
              component={RouterLink}
              to='/SignUp'
              sx={{
                fontWeight: 'lg', color: 'rgb(208, 0, 64) !important', '&:hover': {
                  textDecorationColor: 'rgb(251, 26, 93)'

                }
              }}>Sign up!</Link>
          </Typography>}
          <Typography
            level="body-xs"
            sx={{
              position: 'absolute',
              top: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
          </Typography>
        </TwoSidedLayout>
      </Box>
    </CssVarsProvider>
  );
}