import './styles/globals.css'

import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import React from 'react'

import PrivyProviderWrapper from '@/components/privyWrapper/PrivyWrapper'
import { ThemeProvider } from '@/components/themeWrapper/ThemeContext'
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
          <ThemeProvider>
            <ThemeWrapper>
              <PrivyProviderWrapper>
                <CssBaseline />
                {children}
              </PrivyProviderWrapper>
            </ThemeWrapper>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
