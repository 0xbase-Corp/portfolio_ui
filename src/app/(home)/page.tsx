'use client'

import LoginDialog from "@/container/LoginDialog"


export default function Home() {
  return (
    <main >
      <h1>Landing Home Page</h1>
      <LoginDialog onSignupClick={function (): void {
        throw new Error("Function not implemented.")
      } } onConnectWalletClick={function (): void {
        throw new Error("Function not implemented.")
      } }  />
    </main>
  )
}
