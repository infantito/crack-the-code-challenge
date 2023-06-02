import classnames from './card.module.scss'

import * as React from 'react'
import Image from 'next/image'

import type { CardProps } from '@typings'
import Link from 'next/link'
import { Routes } from '@constants'

const Card = (props: CardProps) => {
  const { slug, src, title, price, discount } = props

  const href = Routes.COURSE_DETAIL.replace(':slug', slug)

  return (
    <div className={classnames.card}>
      <div className={classnames.card__banner}>
        <Image
          className="object-cover"
          src={src}
          alt={title}
          width={304}
          height={158}
          priority={true}
        />
      </div>
      <h5 className="text-base text-white text-center bg-primary py-2 h-10 block">
        Ruta de aprendizaje: <span className="font-bold">4 cursos</span>
      </h5>
      <div className={classnames.card__body}>
        <div>
          <h3 className="font-bold text-2xl">{title}</h3>
          <span className="text-sm text-black/50">4 cursos: 9 meses / 36 clases</span>
          <p className="text-sm mt-2">
            ¡Motiva a tu hij@ a codificar su futuro mientras se divierte!
          </p>
        </div>
        <div className={classnames.card__pricing}>
          <span className="text-xs block">Total x 4 cursos:</span>
          <span className="text-sm text-black/50 block line-through">US$ {price}</span>
          <span className="text-xl font-bold block">US$ {price}</span>
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
