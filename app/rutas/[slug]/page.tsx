'use client'

import * as React from 'react'

import type { Ruta, RutaDetailProps } from '@typings'
import { queryClient } from '@utils'
import { fetchRutaBySlug } from './ruta-detail.utils'

const RutaDetail = (props: RutaDetailProps) => {
  const { params } = props

  const ruta = React.use(queryClient(`ruta:${params.slug}`, () => fetchRutaBySlug(params.slug)))

  if (typeof ruta === 'string') {
    return <div>{ruta}</div>
  }

  return <div>ruta-detail</div>
}

export default RutaDetail
