'use client'

import { Routes } from '@constants'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className="flex items-center justify-center py-20 px-6 bg-primary">
      <div className="text-center text-white">
        <h3>Algo salió mal...</h3>
        <h4>Error 404 Page Not Found</h4>
        <p>Esta página no existe o fue eliminada :( Te sugerimos regresar al Home</p>
        <Link className="text-secondary" href={Routes.HOME}>
          Volver al Home
        </Link>
      </div>
      <div>
        <Image src="/images/image-404.webp" alt="404" width={530} height={528} priority={true} />
      </div>
    </section>
  )
}

export default NotFound
