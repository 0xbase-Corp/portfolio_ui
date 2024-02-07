'use client'

import { useState } from 'react'

import Footer from '@/components/footer/Footer'
import LoadingButton from '@/components/loadingbutton/LoadingButton'
import LoginDialog from '@/views/LoginDialog'

export default function Home() {
  const [loading, setLoading] = useState(false)

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
      <h1>Landing Home Page</h1>
      <LoginDialog />
      <LoadingButton title="Click me" onClick={handleButtonClick} loading={loading} />
      <Footer />
    </main>
  )
}
