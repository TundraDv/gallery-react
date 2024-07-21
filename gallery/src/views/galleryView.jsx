import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Container, Paper, Card, Grid,ImageList,ImageListItem,Box,Chip,IconButton,
  List, Button, Stack, ListItem, ImageContainer, ListItemIcon, ListItemText,ImageListItemBar,
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const theme = createTheme();

const Root = styled('div')(({ theme }) => ({
  '&:hover .overlay': {
    opacity: 1,
  },
  '&:hover .image': {
    // opacity: 0.7,
    // maskImage: 'radial-gradient(circle, transparent, black)',
    maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.7), black)',
    // filter: 'brightness(0.7)',
  },
}));

const Image = styled('img')(({ theme }) => ({
  borderRadius: 20,
  transition: 'opacity 0.3s ease',
}));

const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'opacity 0.3s ease',
}));

const IconRow = styled(Stack)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: 0, // Remove padding
}));

const TopRow = styled(IconRow)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
}));

const BottomRow = styled(IconRow)(({ theme }) => ({
  position: 'absolute',
  bottom: 35,
  left: 0,
}));

export default function GalleryView() {
  const [visibleImages, setVisibleImages] = useState(itemData.slice(0, 6));
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const handleLoadMore = () => {
    const currentLength = visibleImages.length;
    const nextImages = itemData.slice(currentLength, currentLength + 30);
    setVisibleImages([...visibleImages, ...nextImages]);
  };

  return (
    <Box sx={{ 
      display: 'flex',
      margin: 5,
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <Box>
        <ImageList variant="masonry" cols={matches ? 1 : 3} gap={15}>
          {itemData.map((image, index) => (
            <ThemeProvider theme={theme}>
            <Root>
            <ImageListItem key={index}>
              <Image  className="image"
                srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.img}?w=248&fit=crop&auto=format`}
                alt={`Img${index}`}
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
                />
                <Overlay className="overlay">
                  <TopRow direction="row">
                    <IconButton>
                      <AcUnitIcon /><AcUnitIcon />
                    </IconButton>
                    <IconButton>
                      <AcUnitIcon />
                    </IconButton>
                  </TopRow>
                  <BottomRow direction="row">
                    <IconButton>
                      <AcUnitIcon /> Life really sucks
                    </IconButton>
                    <IconButton>
                      <AcUnitIcon />
                    </IconButton>
                  </BottomRow>
                </Overlay>
                <Stack direction="row" spacing={1} sx={{ margin: 1 }}>
                  {image.tags.map((tag, index) => (
                    <Chip  size="small" label={tag}/>
                  ))}
                </Stack>
            </ImageListItem>
            </Root>
            </ThemeProvider>
          ))}
        </ImageList>
      <Button sx= {{width: '100%', marginTop: 5}}variant="contained" onClick={handleLoadMore}> Más🌉</Button>
      </Box>
    </Box>
  );
};

// const useStyles = makeStyles(() => ({
//   root: {
//     position: 'relative',
//     display: 'inline-block',
//     '&:hover $overlay': {
//       opacity: 1,
//     },
//     '&:hover $image': {
//       opacity: 0.7,
//     },
//   },
//   image: {
//     display: 'block',
//     width: '100%',
//     height: 'auto',
//     transition: 'opacity 0.3s ease',
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     opacity: 0,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     transition: 'opacity 0.3s ease',
//     padding: 0, // Remove padding
//   },
//   iconRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '100%',
//     padding: 0, // Remove padding
//   },
//   topRow: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     padding: 8, // Adjust if needed
//   },
//   bottomRow: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     width: '100%',
//     padding: 8, // Adjust if needed
//   },
// }));

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    author: 'swabdesign',
    tags: ['HD Wallpaper', 'background']
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec',
    tags: ['HD Wallpaper', 'background']
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio',
    tags: ['HD Wallpaper', 'background']
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
    tags: ['HD Wallpaper', 'View']
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson',
    tags: ['View']
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
    tags: ['HD Wallpaper']
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
    tags: ['HD Wallpaper', 'View']
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
    tags: ['Photography']
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.',
    tags: ['HD Wallpaper', 'Photography']
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
    tags: ['HD Wallpaper', 'View']
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
    tags: ['HD Wallpaper', 'Photography']
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
    tags: ['HD Wallpaper', 'Photography']
  },
];