'use client'

import * as React from 'react'

import { Feed } from '@containers'
import { queryClient } from '@utils'
import { fetchRutas } from './rutas.utils'

const Rutas = () => {
  const rutas = React.use(queryClient('rutas', fetchRutas))

  if (typeof rutas === 'string') {
    return <p>{rutas}</p>
  }

  return <Feed rutas={rutas} />
}

export default Rutas
