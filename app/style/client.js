"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/style/global";
import { theme } from "@/style/theme";


export default function ClientLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
