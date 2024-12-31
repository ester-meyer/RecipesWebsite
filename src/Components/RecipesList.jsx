import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import AspectRatio from '@mui/joy/AspectRatio';


export default function RecipesList() {
    const reciepes=useSelector(slices=>slices.RecipesSlice).recipes;
  return (
    // <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
    // <Box sx={{ width: '100%', height: '30vh', marginBottom: 2}}>
    //     <Typography variant="h4" fontWeight="bold" align="center" style={{

    //     }}>
    //       Recipes
    //     </Typography>
    //   </Box>
    // <ImageList sx={{ width: '95%', height: '100%'}} cols={5} gap={20} >
    //   {reciepes.map((item) => (
    //     <ImageListItem key={item.img}>
    //       <img
    //         srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //         src={`${item.image}?w=248&fit=crop&auto=format`}
    //         alt={item.name}
    //         loading="lazy"
    //       />
    //       <ImageListItemBar
    //         title={item.name}
    //         subtitle={<span>by: {item.name}</span>}
    //         position="below"
    //       />
    //       <ListItemButton component="a" href="#actionable">
    //       <ListItemDecorator>
    //         <OpenInNew />
    //       </ListItemDecorator>
    //       Open a new tab
    //     </ListItemButton>
    //     </ImageListItem>
    //   ))}
    // </ImageList>
    // </div>
    <div  style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', rowGap: '20px' }}>
      {reciepes.map((item)=>{
        return(
<Card sx={{ width: 320 }}>
        <div>
          <Typography level="title-lg">Yosemite National Park</Typography>
          <Typography level="body-sm">April 24 to May 02, 2021</Typography>
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
          >
            <BookmarkAdd />
          </IconButton>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src={item.image}
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Total price:</Typography>
            <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>$2,900</Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto',
               alignSelf: 'center',
                fontWeight: 600,
                backgroundColor: 'rgb(208, 0, 64)', // צבע רקע מותאם אישית
                '&:hover': {
                  backgroundColor: 'rgb(251, 26, 93)', // צבע רקע במצב hover
                }, }}
          >
            Explore
          </Button>
        </CardContent>
      </Card>
        )
      })}
    </div>
  );
}