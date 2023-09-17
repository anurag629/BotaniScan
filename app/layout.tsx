import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header/Header";
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BOTANI SCAN',
  description: 'AI app for medicinal plants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        {/* <div>
          <Header />
        </div> */}
        <div className={inter.className}>
        {children}
       

        </div>
        <div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
