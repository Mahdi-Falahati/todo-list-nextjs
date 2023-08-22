"use client";
import Todo from "@/components/Todos";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import NightsStayIcon from '@mui/icons-material/NightsStay';

export default function Home() {
  const [toggleDark, settoggleDark] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <IconButton
          aria-label="dark-mode"
          color="secondary"
          onClick={() => settoggleDark(!toggleDark)}
        >
          <LightModeIcon />
          <NightsStayIcon />
        </IconButton>

        <Todo />
      </main>
    </ThemeProvider>
  );
}
