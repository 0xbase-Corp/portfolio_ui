'use client'

import { colors, createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: colors.grey[900],
    },
    secondary: {
      main: colors.cyan[800],
    },
    background: {
      default: colors.blueGrey[50],
    },
    mode: 'light',
  },
})

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: colors.grey[50],
    },
    secondary: {
      main: '#212325',
    },
    background: {
      default: '#0D0D0D',
    },
    mode: 'dark',
  },
})
