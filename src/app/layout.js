import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from '@next/font/google'

const inter = Poppins({
  weight: ['300','400','500','600','700','800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Lot Designs | Creative Branding Agency',
  description: 'A creative branding agency that believes in innovative ideas that function. We value the significance of creating new things that ultimately serve a purpose.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='font-poppins'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
