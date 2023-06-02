import classnames from './feed.module.scss'

import * as React from 'react'

import type { FeedProps } from '@typings'
import { Card } from '@components'

const Feed = (props: FeedProps) => {
  const { rutas } = props

  return (
    <div className={classnames.feed}>
      {rutas.all.map(ruta => {
        return <Card key={ruta.id} ruta={ruta} />
      })}
    </div>
  )
}

export default Feed
