'use client'

import { colors, createTheme } from '@mui/material'

export const theme = createTheme({
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
  },
})
