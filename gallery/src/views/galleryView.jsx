import React, { useState, useEffect } from 'react';
import {
  Container, Paper, Card, Grid,ImageList,ImageListItem,Box,Chip,
  List, Button, Stack, ListItem, ImageContainer, ListItemIcon, ListItemText,ImageListItemBar,
} from '@mui/material';

export default function GalleryView() {
  const [visibleImages, setVisibleImages] = useState(itemData.slice(0, 6));

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
      <Box sx={{ 
        margin: 5,
        padding: 4,
        // justifyContent: 'center',
        // alignItems: 'center',
        }}>
        <ImageList variant="masonry" cols={3} gap={15}>
          {itemData.map((image, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.img}?w=248&fit=crop&auto=format`}
                alt={`Img${index}`}
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
                />
                <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
                  {image.tags.map((tag, index) => (
                    <Chip  size="small" label={tag}/>
                  ))}
                </Stack>
            </ImageListItem>
          ))}
        </ImageList>
      <Button sx= {{width: '100%', marginTop: 5}}variant="contained" onClick={handleLoadMore}> Más🌉</Button>
      </Box>
    </Box>
  );
};

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