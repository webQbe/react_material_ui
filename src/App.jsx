import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'; // Renders a Material-styled button
import ButtonGroup from '@mui/material/ButtonGroup'; 
import SaveIcon from '@mui/icons-material/Save'; // Import "Save" icon from MUI Icons package
import DeleteIcon from '@mui/icons-material/Delete';  // Import "Delete" icon
import Checkbox from '@mui/material/Checkbox';  // Import "Checkbox" icon
import FormControlLabel from '@mui/material/FormControlLabel'; 
import './App.css';

const CheckboxExample = () => {

  // Create state variable checked that is initially true (checkbox is checked by default)
  const [checked, setChecked] = useState(true);

  return (

    <FormControlLabel // Wrap <Checkbox> and label, make both clickable, & ensure proper alignment + spacing
        
        // Pass controlled <Checkbox> as control prop
        control={ 
                <Checkbox 
                    checked={checked} // Make MUI <Checkbox /> a controlled component
                    icon={<DeleteIcon />}      // Icon when unchecked
                    checkedIcon={<SaveIcon />} // Icon when checked
                    onChange={(e)=>setChecked(e.target.checked)} // Update checked state whenever user toggles checkbox
                    inputProps={{ // Add an accessible label for screen readers
                      'aria-label':'secondary checkbox' 
                    }}
                />
              }
                label="Testing Checkbox" // This text appears to the right of the checkbox
    />
  )
}

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

      {/* Show functional checkbox */}
      <CheckboxExample />

      <ButtonGroup // Group multiple <Button> components into single horizontal layout with uniform styling.
        variant='contained' // All buttons look like raised/filled buttons
        color='primary'     // Applies theme's primary color (blue) to all buttons in the group
      >
        {/* Render connected Save & Discard buttons side by side */}
        <Button 
          startIcon={<SaveIcon />} // Render Save icon before button text 
        >
          Save
        </Button>

        <Button 
          startIcon={<DeleteIcon />} // Render Delete icon before button text 
        >
          Discard
        </Button>

      </ButtonGroup>
    </ThemeProvider>
   </div>
  )
}

export default App
