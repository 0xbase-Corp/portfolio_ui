import './styles/globals.css'

import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import React from 'react'

import Navbar from '@/components/navbar/Navbar'
import PrivyProviderWrapper from '@/components/privyWrapper/PrivyWrapper'
import ThemeWrapper from '@/components/themeWrapper/ThemeWrapper'

export const metadata = {
  title: 'Porfolio Meta',
  description: 'One place to view all your assets',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <AppRouterCacheProvider>
          <ThemeWrapper>
            <PrivyProviderWrapper>
            <CssBaseline />
            <Navbar />
            {children}
            </PrivyProviderWrapper>
          </ThemeWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
