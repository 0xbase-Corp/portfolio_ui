'use client'

import './styles/globals.css'

import { CssBaseline, Button  } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import React, { useState } from 'react'

import Navbar from '@/components/navbar/Navbar'
import { lightTheme, darkTheme } from '@/utils/theme'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// export const metadata = {
//   title: 'Porfolio Meta',
//   description: 'One place to view all your assets',
// }
export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <html lang="en">
      <head></head>
      <body>
        <AppRouterCacheProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Navbar />
            <Button onClick={toggleDarkMode}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
