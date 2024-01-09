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
      <body>{children}</body>
    </html>
  )
}
