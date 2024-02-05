'use client'
import { useState } from 'react'
import Footer from '@/components/footer/Footer'
import LoadingButton from '@/components/loadingbutton/LoadingButton'
import LoginDialog from '@/views/LoginDialog'

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      // Set loading to true before the async task starts
      setLoading(true);
      // Simulate a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Async task completed!');
    } finally {
      // Set loading to false once the async task is completed (or even if it fails)
      setLoading(false);
    }

  };
  return (
    <main>
      <h1>Landing Home Page</h1>
      <LoginDialog />
      <LoadingButton title="Click me" onClick={handleButtonClick} setLoading={setLoading} loading={loading} />
      <Footer />
    </main>
  )
}
