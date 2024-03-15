'use client'
import React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/utils/theme';
import { useTheme } from './ThemeContext';
const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useTheme(); 
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeWrapper;