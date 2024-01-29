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
      </head>
    <body><Navbar/>{children}</body>
    </html>
  )
}
