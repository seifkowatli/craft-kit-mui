import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useCraftKitState } from "~/providers";
import CssBaseline from "@mui/material/CssBaseline";

export const palette = (theme) => {
  let color = theme === "dark" ? "#03aeff" : "#086cb3";
  return {
    primary: { main: color },
    secondary: { main: color },
  };
};

export function ThemeContextProvider({ children }) {
  const {
    craftKitState: { currentTheme, currentLang },
  } = useCraftKitState();

  const theme = createTheme({
    direction: currentLang === "ar" ? "rtl" : "ltr",
    palette: {
      ...palette(currentTheme),
      mode: currentTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
