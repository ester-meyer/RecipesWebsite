/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../Components/TwoSidedLayout';

export default function HeroLeft01() {
  return (
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
        JOIN US BEAKING-
        <br />
        YAMMY.
      </Typography>
      <Typography
        textColor="text.secondary"
        sx={{ fontSize: 'lg', lineHeight: 'lg' }}
      >
        A descriptive secondary text placeholder. Use it to explain your business
        offer better.
      </Typography>
      <Button size="lg" sx={{
        backgroundColor: 'rgb(208, 0, 64)',
        '&:hover': {
          backgroundColor: 'rgb(251, 26, 93)'

        }
      }}>
        Get Started
      </Button>
      <Typography>
        Already a member? <Link sx={{ fontWeight: 'lg', color: 'rgb(208, 0, 64) !important' }}>Sign in</Link>
      </Typography>
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
  );
}