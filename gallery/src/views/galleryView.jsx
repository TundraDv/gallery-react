import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Container, Paper, Card, Grid,ImageList,ImageListItem,Box,Chip,IconButton, useTheme, Avatar,
  List, Button, Stack, ListItem, ImageContainer, ListItemIcon, ListItemText,ImageListItemBar, CircularProgress,
  Typography,
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';
import data_unsplash from '../data/data_unsplash.json'

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
  borderRadius: 5,
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

const OutlinedIconButton = styled(IconButton)(({ theme }) => ({
  // border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: theme.shape.borderRadius,
  padding: 0,
  margin: 5,
  color: "#767676",
  backgroundColor: "#EEEEEE !important",
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  width: 40, // Fixed width
  height: 40, // Fixed height
}));

export default function GalleryView() {
  const [visibleImages, setVisibleImages] = useState(data_unsplash.slice(0, 6));
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    const currentLength = visibleImages.length;
    const nextImages = data_unsplash.slice(currentLength, currentLength + 20);
    setTimeout(() => {
      setVisibleImages([...visibleImages, ...nextImages]);
      setLoading(false);
    }, 1000); // Simulate a network request with timeout
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Small screens (mobile)
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); // Medium screens (tablet)

  let cols;
  if (isSmallScreen) {
    cols = 1;
  } else if (isMediumScreen) {
    cols = 2;
  } else {
    cols = 3;
  }

  return (
    <Box sx={{ 
      display: 'flex',
      margin: 5,
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <Box>
        <ImageList variant="masonry" cols={cols} gap={15}>
          {visibleImages.map((image, index) => (
            <ThemeProvider theme={theme}>
            <Root>
            <ImageListItem key={index}>
              <Image className="image"
                srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.img}?w=248&fit=crop&auto=format`}
                alt={`Img${index}`}
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
                />
                <Overlay className="overlay">
                <TopRow direction="row">
                  <IconButton>
                    <AcUnitIcon />
                  </IconButton>
                  <div style={{ display: 'flex', gap: 1 }}>
                    <OutlinedIconButton>
                      <FavoriteIcon />
                    </OutlinedIconButton>
                    <OutlinedIconButton>
                      <AddIcon />
                    </OutlinedIconButton>
                  </div>
                </TopRow>
                  <BottomRow direction="row">
                    <IconButton>
                      <Avatar sx={{marginRight: 2}} alt={image.author} src={image.imgUser}/>
                    <Typography sx={{color: '#FFF'}}>
                    {image.author}
                    </Typography>
                    </IconButton>
                    <OutlinedIconButton>
                      <ArrowDownwardIcon />
                    </OutlinedIconButton>
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
        {loading && (
        <Box display="flex" justifyContent="center" my={2}>
          <CircularProgress />
        </Box>
      )}
      <Button sx= {{width: '100%', marginTop: 5}}variant="contained" onClick={handleLoadMore}> Más🌉</Button>
      </Box>
    </Box>
  );
};