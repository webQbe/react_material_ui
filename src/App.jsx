import { useState } from 'react'
import Button from '@mui/material/Button'; // Renders a Material-styled button
import './App.css'

function App() {

  return (
   <div className="App">
    <Button 
      variant='contained' 
      /* variant="contained" means:
      The button has a filled background (usually your theme’s primary color)
      It has elevation (drop shadow) to distinguish it from the background. */

      color='secondary' // Set alternate theme color (By default, it’s purple, but it can be customized.)
    >
      Hello World
    </Button>
   </div>
  )
}

export default App
