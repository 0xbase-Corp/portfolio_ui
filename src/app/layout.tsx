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
      <body><Navbar></Navbar>{children}</body>
    </html>
  )
}
