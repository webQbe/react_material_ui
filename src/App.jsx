import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'; // Renders a Material-styled button
import './App.css'

// Creates custom MUI theme
const theme = createTheme({
  // Define palette.secondary.main
  palette: {
    secondary: {
      main: '#f44336', // red
      /* Override the default purple secondary color in MUI */
    },
  },
});

function App() {

  return (
   <div className="App">
    <ThemeProvider 
      theme={theme} /* Wrap your component tree & provide custom theme to all MUI components inside it */
    >
      <Button 
        variant='contained' 
        /* variant="contained" means:
          The button has a filled background (usually your theme’s primary color)
          It has elevation (drop shadow) to distinguish it from the background. 
          Behavior: Standard hover, focus, and ripple effects from MUI */

        color='secondary' // Set alternate theme color (By default, it’s purple, but it can be customized.)
      >
        Hello World
      </Button>
    </ThemeProvider>
   </div>
  )
}

export default App
