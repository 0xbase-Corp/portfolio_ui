'use client'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import React, { FC, ReactNode, useState, useEffect } from 'react'

import { darkTheme, lightTheme } from '@/utils/theme'

const ThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference from local storage or any other source
    const storedTheme = localStorage.getItem('theme');
    setIsDarkMode(storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      {children}
      <Button onClick={toggleTheme}>{isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}</Button>
    </ThemeProvider>
    
     
    
  )
}

export default ThemeWrapper
