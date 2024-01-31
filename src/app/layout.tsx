import './styles/globals.css';
import Navbar from "@/components/navbar/Navbar"
import React from 'react';

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
      <body><Navbar />{children}</body>
    </html>
  )
}
