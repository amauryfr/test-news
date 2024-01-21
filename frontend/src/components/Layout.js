import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from '../assets/logo.png';

const theme = createTheme({
  palette: {
    background: {
      default: '#E5E5E5',
    },
  },
  typography: {
    fontFamily: ['"Noto Sans"', 'sans-serif'].join(','),
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        backgroundColor="#AACCE5"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        margin="0 auto"
        height="100px"
        padding="20px 76px"
      >
        <Grid 
          container 
          spacing={4} 
          maxWidth="1100px"
        >
          <Grid 
            item
            cursor="pointer"
          >
            <img src={Logo} alt="Logotipo" />
          </Grid>
          <Grid item xs alignItems="rigth">
            <h1>Gerenciamento de notícias</h1>
          </Grid>
        </Grid>
      </Box>
      <Box flex="1" textAlign="left" padding="0 16px">
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
