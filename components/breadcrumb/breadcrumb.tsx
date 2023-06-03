import * as React from 'react'
import Link from 'next/link'

import type { BreadCrumbProps } from '@typings'
import { Routes } from '@constants'

const Breadcrumb = (props: BreadCrumbProps) => {
  return (
    <>
      <Link href={Routes.HOME}>Inicio</Link>
      <span className="mx-3">&gt;</span>
      <Link href={Routes.RUTAS}>Rutas de Aprendizaje</Link>
      <span className="mx-3">&gt;</span>
      <span>{props.name}</span>
    </>
  )
}

export default Breadcrumb
