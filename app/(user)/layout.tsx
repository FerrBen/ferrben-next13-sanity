import '../../styles/globals.css'
import Header from '../../components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="mx-auto max-w-7xl">
        <Header />

        {children}
      </body>
    </html>
  )
}
