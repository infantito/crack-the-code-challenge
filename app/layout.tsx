import '@styles/globals.css'
import { Sofia_Sans } from 'next/font/google'

import type { ReactNodeProps } from '@typings'
import { Footer } from '@containers'

const sofia = Sofia_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Crack The Code',
  description: 'Academia online de programación y tecnología',
}

const RootLayout = (props: ReactNodeProps) => {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col items-center justify-between ${sofia.className}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
