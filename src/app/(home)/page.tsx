'use client'

import { useState } from 'react'

import Footer from '@/components/footer/Footer'
import LoadingButton from '@/components/loadingbutton/LoadingButton'
import Navbar from '@/components/navbar/Navbar'
import LoginDialog from '@/views/LoginDialog'
import { useTheme } from '@/components/themeWrapper/ThemeContext'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'


export default function Home() {
  const [loading, setLoading] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme();
  const handleButtonClick = async () => {
    try {
      setLoading(true)
      // Simulate a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Async task completed!')
    } finally {
      setLoading(false)
    }
  }
  return (
    <main>
      <Navbar />
      <h1>Landing Home Page</h1>
      <LoginDialog />
      <LoadingButton title="Click me" onClick={handleButtonClick} loading={loading} />
      <IconButton onClick={toggleTheme} color="inherit">
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Footer />
    </main>
  )
}
