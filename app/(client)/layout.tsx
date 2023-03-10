import '@/styles/globals.scss'
import '@/styles/general.scss'
import Header from './(component)/Header'
import Footer from './(component)/Footer'
import AppProvider from './provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Header />
            {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
