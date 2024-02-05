'use client'

import Footer from '@/components/footer/Footer'
import LoginDialog from '@/views/LoginDialog'

export default function Home() {
  return (
    <main>
      <h1>Landing Home Page</h1>
      <LoginDialog />
      <Footer />
    </main>
  )
}
