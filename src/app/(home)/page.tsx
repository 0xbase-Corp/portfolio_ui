'use client'

import Footer from '@/components/footer/Footer'
import Button from '@/components/loadingbutton/LoadingButton'
import LoginDialog from '@/views/LoginDialog'

export default function Home() {
  const simulateAsyncTask = async () => {
    // Simulate a delay of 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('Async task completed!')
  }
  return (
    <main>
      <h1>Landing Home Page</h1>
      <LoginDialog />
      <Footer />
      <Button title="Click Me" onClick={simulateAsyncTask} />
    </main>
  )
}
