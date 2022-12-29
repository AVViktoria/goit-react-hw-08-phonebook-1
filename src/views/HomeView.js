import React from 'react';
import {
  Grid,
  
  Typography,

} from '@mui/material';
const HomeView = () => (
<Grid container
  sx={{
    height: '100vh',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: t =>
      t.palette.mode === 'light'
        ? t.palette.grey[50]
        : t.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <Typography
          component="h1"
          variant="h2"
          fontWeight={700}
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1, mt: 10, letterSpacing:10,  color: '#491501'}}
        > Welcome!
        </Typography>
        </Grid>
);

export default HomeView;


