import './styles/globals.css';

export const metadata = {
  title: 'Porfolio Meta',
  description: 'One place to view all your assets',
}
import Navbar from "@/components/navbar/Navbar"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body><Navbar/>{children}</body>
    </html>
  )
}
