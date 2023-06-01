import '@styles/globals.css'
import { Inter } from 'next/font/google'
import { ReactNodeProps } from '@typings'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crack The Code',
  description: 'Academia online de programación y tecnología',
}

const RootLayout = (props: ReactNodeProps) => {
  const { children } = props

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
