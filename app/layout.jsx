import Background from '@/Components/Background'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bio da Carol',
  description: 'pra colocar em qualquer lugar bem fofos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/img/icon3.png" />
      <body className={inter.className}>
        <div className="content-box">
          <Background />
          <div className="content">
            {children}
        </div>
        </div>
      </body>
    </html>
  )
}
