import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { AuthProvider } from './Providers'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Ada Tour Travel',
  description: 'Umrah dan Haji Lampung',
  key: 'adatourlpg'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
           {children}
        </AuthProvider>
        </body>
    </html>
  )
}
