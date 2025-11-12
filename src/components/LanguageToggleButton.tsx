import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lime, purple, red } from '@mui/material/colors';
import { useState, type MouseEvent } from 'react';



// const theme = createTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: lime,
//       },
//     },
//     dark: {
//       palette: {
//         primary: purple,
//       },
//     },
//   },
//   // palette: {
//   //   // primary: lime,
//   //   secondary: purple,
//   //   primary: {
//   //     main: '#E0C2FF',
//   //     light: '#F5EBFF',
//   //     // dark: will be calculated from palette.secondary.main,
//   //     contrastText: '#47008F',
//   //   }
//   // },
// });

export default function LanguageToggleButton(params: {darkMode: boolean}) {  
  const theme = createTheme({
    palette:{
        primary: params.darkMode === true ? {
          main: '#fff',
          light: '#E0C2FF',
          dark: red[600],
          contrastText: red[600]
        }
      : {
          main: blue[900],
          light: '#E9DB5D',
          dark: red[600],
          contrastText: red[600]
        }
    },
    
  });
  const [language, setLanguage] = useState('en');

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newLanguage: string,
  ) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        size='small'
        color='primary'
        className="flex flex-row items-center *:text-secondary! *:border-secondary!"
        // className="bg-secondary! flex flex-row items-center *:text-primary!"
        value={language}
        classes={{selected: 'bg-red-500!'}}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="es">ES</ToggleButton>
        <ToggleButton value="en">EN</ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );


}


// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme()`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }
