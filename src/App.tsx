import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Header from './Componenets/Header/Header';
import Home from './Componenets/Home/Home';

function App() {
  return (

<Box sx={{ flexGrow: 1 }}>
  <Header />
<Grid container spacing={2}>
  <Grid item xs={12} sm={12} md={12} lg={12} >
    <Home />
  </Grid>
</Grid>
</Box>
  );
}

export default App;
