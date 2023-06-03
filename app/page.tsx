import classnames from './root.module.scss'

import { Routes } from '@constants'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${classnames.page}`}>
      <article className={classnames.content}>
        <div className={classnames.banner}>
          <Image
            width={640}
            height={1024}
            priority={true}
            alt="Crack The Code"
            src="/images/main-banner.webp"
          />
          <div className={classnames.header}>
            <h1 className={classnames.title}>Crack The Code</h1>
          </div>
        </div>
        <h3 className="text-4xl font-bold text-black text-center mt-12 px-4">
          ¡Las herramientas del futuro, hoy!
        </h3>
        <h5 className="text-xl text-black text-center mt-2 px-4">
          Clases de programación para niños, niñas y adolescentes que promueven la creatividad y
          diversión.
        </h5>
        <div className={classnames.action}>
          <Link className={classnames.link} href={Routes.COURSES}>
            Ver rutas
          </Link>
        </div>
      </article>
    </main>
  )
}

export default Home
