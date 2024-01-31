import './styles/globals.css';
import Navbar from "@/components/navbar/Navbar"
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { theme } from "@/utils/theme"
import { ThemeProvider } from '@mui/material/styles'

export const metadata = {
  title: 'Porfolio Meta',
  description: 'One place to view all your assets',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
