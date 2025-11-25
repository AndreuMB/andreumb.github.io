import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import { useState, type MouseEvent } from "react";
import { i18n } from "@lingui/core";

export default function LanguageToggleButton(params: { darkMode: boolean }) {
  const theme = createTheme({
    palette: {
      primary:
        params.darkMode === true
          ? {
              main: "#fff",
              light: "#E0C2FF",
              dark: red[600],
              contrastText: red[600],
            }
          : {
              main: blue[900],
              light: "#E9DB5D",
              dark: red[600],
              contrastText: red[600],
            },
    },
  });
  const [language, setLanguage] = useState(navigator.language.split("-")[0]);

  const handleChange = (
    _event: MouseEvent<HTMLElement>,
    newLanguage: string
  ) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
      i18n.activate(newLanguage);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        size="small"
        color="primary"
        className="flex flex-row items-center *:text-secondary! *:border-secondary!"
        // className="bg-secondary! flex flex-row items-center *:text-primary!"
        value={language}
        classes={{ selected: "bg-red-500!" }}
        exclusive
        onChange={handleChange}
        sx={{
          "& .MuiButtonBase-root": {
            height: "100%",
            padding: "0px",
            width: "30px",
          },
        }}
        // "& .MuiTabs-indicator": {
        //       backgroundColor: "yellow",
        //     },
      >
        <ToggleButton value="es">ES</ToggleButton>
        <ToggleButton value="en">EN</ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
}
