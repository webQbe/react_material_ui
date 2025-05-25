import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'; // Renders a Material-styled button
import ButtonGroup from '@mui/material/ButtonGroup'; 
import SaveIcon from '@mui/icons-material/Save'; // Import "Save" icon from MUI Icons package
import DeleteIcon from '@mui/icons-material/Delete';  // Import "Delete" icon
import Checkbox from '@mui/material/Checkbox';  // Import "Checkbox" icon
import FormControlLabel from '@mui/material/FormControlLabel'; 
import TextField from '@mui/material/TextField'; 
/* @mui/styles is deprecated in MUI v5+  */
import { orange, green } from '@mui/material/colors'; 
import 'fontsource-roboto'; // Imports the Roboto font locally
import Typography from '@mui/material/Typography'; 
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
                    icon={<SaveIcon />}        // Icon appears gray
                    checkedIcon={<SaveIcon />} // When checked icon becomes blue (primary color)
                    // checkedIcon={<DeleteIcon />} // Icon when checked
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
  palette: {
    primary: {
      main: orange[400], // Sets primary color to a medium orange
    },
    secondary: {
      main: green[400], // Sets secondary color to a medium green
      /* Override the default color in MUI */
    },
    customText: {
      main: '#d32f2f', // custom red
    },
  },
  typography: { // Theme-Driven Typography

      h1: {
        fontSize: '3rem',
        fontWeight: 700,
      },
  },
});

function App() {

  return (
   <div className="App">
    <div className="App-header">
      <ThemeProvider 
        theme={theme} /* Wrap your component tree & provide custom theme to all MUI components inside it */
      >

        {/* Render <h1> element by default  
          Typography styling is controlled by the theme. */}
        <Typography 
          variant='h1'  // variants: 'h1', 'h2', 'body1', 'subtitle1', etc
        >
          Welcome to MUI
        </Typography>

        {/* Show Styled Button */}
        <Button
          sx={{
            background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)', // Sets a diagonal gradient background from pink to orange.
            border: 0,
            marginBottom: 2,  // 2 is a spacing unit (MUI's spacing * 8px), so it's 16px
            borderRadius: 2,
            color: 'white',
            padding: '5px 30px', // Adds vertical and horizontal padding
          }}
        >
          Test Styled Button
        </Button>

        {/* Show TextField */}
        <TextField 
          variant='filled'            // Renders field with filled style
          color='secondary'           // Applies theme's secondary font color on focus
          type='email'                // Sets the input type to email (others 'time', 'date')
          placeholder='test@test.com' // Shows placeholder text when the field is empty and focused
          label='Email'               // Display floating label over input. Float up when user types or field is focused.
          sx={{
            input: (theme) => ({
              color: theme.palette.customText.main, // use custom color
            }),
          }}
        />

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
   </div>
  )
}

export default App
