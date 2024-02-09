'use client'

import React, { FC, ReactNode, useState } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import {Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '@/utils/theme'


const ThemeWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
      });
      const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
         {children}
        <Button onClick={toggleDarkMode}>{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}</Button>
    </ThemeProvider>
  )
}

export default ThemeWrapper
