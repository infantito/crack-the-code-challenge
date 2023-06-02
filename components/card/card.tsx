import classnames from './card.module.scss'

import * as React from 'react'
import Image from 'next/image'

import type { CardProps } from '@typings'
import Link from 'next/link'
import { Routes } from '@constants'

const Card = (props: CardProps) => {
  const { ruta } = props

  const href = Routes.COURSE_DETAIL.replace(':slug', ruta.slug)

  return (
    <div className={classnames.card}>
      <div className={classnames.card__banner}>
        <Image
          className="object-cover"
          src="/images/image-card.jpeg"
          alt={ruta.name}
          width={304}
          height={158}
          priority={true}
        />
      </div>
      <h5 className="text-base text-white text-center bg-primary py-2 h-10 block">
        Ruta de aprendizaje: <span className="font-bold">{ruta.courses.length} cursos</span>
      </h5>
      <div className={classnames.card__body}>
        <div>
          <h3 className="font-bold text-2xl">{ruta.name}</h3>
          <span className="text-sm text-black/50">4 cursos: 9 meses / 36 clases</span>
          <p className="text-sm mt-2">{ruta.call_out}</p>
        </div>
        <div className={classnames.card__pricing}>
          <span className="text-xs block">Total x {ruta.courses.length} cursos:</span>
          <span className="text-sm text-black/50 block line-through">US$ {ruta.amount_usd}</span>
          <span className="text-xl font-bold block">US$ {ruta.amount_after_discount_usd}</span>
        </div>
        <div className={classnames.card__go}>
          <Link className="text-xl font-bold" href={href} prefetch={true}>
            Ver ruta
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
