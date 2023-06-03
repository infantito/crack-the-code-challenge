'use client'

import classnames from './ruta-detail.module.scss'

import * as React from 'react'

import type { Ruta, RutaDetailProps } from '@typings'
import { queryClient } from '@utils'
import { fetchRutaBySlug } from './ruta-detail.utils'
import { Logo, Youtube } from '@components'
import { Faq } from '@containers'

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
        <h3 className={classnames.banner__title}>{ruta.name}</h3>
      </div>
      <div className={classnames.content}>
        <div className={classnames.video}>
          <Youtube width="520" height="306" src={ruta.youtube_video_id} />
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
      <footer className={classnames.footer}>
        <Logo />
      </footer>
    </div>
  )
}

export default RutaDetail
