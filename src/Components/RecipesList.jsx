import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';

export default function RecipesList() {
    const reciepes=useSelector(slices=>slices.RecipesSlice).recipes;
  return (
    <>
    <Box sx={{ width: '100%', height: '30vh', marginBottom: 2 }}>
        <Typography variant="h4" fontWeight="bold" align="center">
          My Recipe List
        </Typography>
      </Box>
    <ImageList sx={{ width: '100%', height: '100%'}} cols={5} gap={12} >
      {reciepes.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=248&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={<span>by: {item.name}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
    
  );
}