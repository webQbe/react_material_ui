import { useState } from 'react'
import Button from '@mui/material/Button'; // Renders a Material-styled button
import './App.css'

function App() {

  return (
   <div className="App">
    <Button 
      variant="contained" 
      /* variant="contained" means:
      The button has a filled background (usually your theme’s primary color)
      It has elevation (drop shadow) to distinguish it from the background. */
    >
      Hello World
    </Button>
   </div>
  )
}

export default App
