'use client'

import Image from 'next/image'

const NotFound = () => {
  return (
    <section>
      <div>
        <h3>Algo salió mal...</h3>
        <h4>Error 404 Page Not Found</h4>
        <p>Esta página no existe o fue eliminada :( Te sugerimos regresar al Home</p>
        <button>Volver al Home</button>
      </div>
      <div>
        <Image src="/images/image-404.webp" alt="404" width={530} height={528} priority={true} />
      </div>
    </section>
  )
}

export default NotFound
