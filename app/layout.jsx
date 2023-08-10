
import './globals.css'
import { Inter } from 'next/font/google'
import { Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit ({subsets : ["latin"]})

export const metadata = {
  title: 'Bio da Carol',
  description: 'pra colocar em qualquer lugar bem fofos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/img/icon3.png" />
      <body className={outfit.className}>
        <div className="content-box">
          <div className="content">
            {children}
        </div>
        </div>
      </body>
    </html>
  )
}
