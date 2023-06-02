import { Routes } from '@constants'
import Link from 'next/link'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Crack The Code</h1>
      <Link href={Routes.COURSES}>Ver rutas</Link>
    </main>
  )
}

export default Home
