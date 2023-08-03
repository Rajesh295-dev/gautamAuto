import './globals.css'

import { Inter, Roboto, Poppins } from "next/font/google";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ThemeProvider } from "@/context/ThemeContext";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'gautamAuto',
  description: 'React nextjs final project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
