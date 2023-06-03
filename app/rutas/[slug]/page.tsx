'use client'

import classnames from './ruta-detail.module.scss'

import * as React from 'react'

import type { RutaDetailProps } from '@typings'
import { Faq } from '@containers'
import { Breadcrumb, Youtube } from '@components'
import { queryClient } from '@utils'
import { fetchRutaBySlug } from './ruta-detail.utils'

const RutaDetail = (props: RutaDetailProps) => {
  const { params } = props

  const ruta = React.use(queryClient(`ruta:${params.slug}`, () => fetchRutaBySlug(params.slug)))

  if (typeof ruta === 'string') {
    return <div>{ruta}</div>
  }

  const [primary, secondary] = ruta.gradient_colors

  return (
    <div className={classnames.page}>
      <div
        className={classnames.banner}
        style={{
          backgroundImage: `linear-gradient(50deg, ${primary} 0%, ${secondary} 100%)`,
        }}
      >
        <div className={classnames.banner__breadcrumb}>
          <Breadcrumb name={ruta.name} />
        </div>
        <h3 className={classnames.banner__title}>{ruta.name}</h3>
      </div>
      <div className={classnames.content}>
        <div className={classnames.video}>
          <Youtube width="520" height="292" src={ruta.youtube_video_id} />
        </div>
        <div className={classnames.content__detail}>
          <div className={classnames.content__description1}>
            ¡Descubre todo lo que pueden lograr!
          </div>
          <div className={classnames.content__description2}>{ruta.description}</div>
        </div>
      </div>
      <div className={classnames.message}>
        <h5 className={classnames.message__title}>¡Qué comience la diversión y el aprendizaje!</h5>
      </div>
      <div className="mt-6">
        <Faq faqs={ruta.faqs} />
      </div>
    </div>
  )
}

export default RutaDetail
