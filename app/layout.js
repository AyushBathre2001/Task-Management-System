import Nav from '@/components/Nav'
import '/styles/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Management System',
  description: 'Task management software is an application that helps organize, streamline, and prioritize tasks required to achieve a goal or complete a project.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
