'use client'

import classnames from './rutas.module.scss'

import * as React from 'react'

import { Feed } from '@containers'
import { queryClient } from '@utils'
import { fetchRutas } from './rutas.utils'

const Rutas = () => {
  const rutas = React.use(queryClient('rutas', fetchRutas))

  if (typeof rutas === 'string') {
    return <p className="p-6">{rutas}</p>
  }

  return (
    <div className={classnames.page}>
      <h2 className="md:text-6xl text-4xl text-center font-bold text-white mt-4 mb-6">
        Rutas de aprendizaje
      </h2>
      <Feed rutas={rutas} />
    </div>
  )
}

export default Rutas
