import './globals.css'

export const metadata = {
  title: 'Arete',
  description: 'Passive Income',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
