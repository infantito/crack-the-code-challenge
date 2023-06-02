import classnames from './feed.module.scss'

import * as React from 'react'

import { Card } from '@components'

const Feed = () => {
  return (
    <div className={classnames.feed}>
      <Card
        discount={0}
        slug="video"
        price={100}
        src="/images/image-card.jpeg"
        title="Edición de videos"
      />
      <Card
        discount={0}
        slug="video"
        price={100}
        src="/images/image-card.jpeg"
        title="Edición de videos"
      />
      <Card
        discount={0}
        slug="video"
        price={100}
        src="/images/image-card.jpeg"
        title="Edición de videos"
      />
      <Card
        discount={0}
        slug="video"
        price={100}
        src="/images/image-card.jpeg"
        title="Edición de videos"
      />
      <Card
        discount={0}
        slug="video"
        price={100}
        src="/images/image-card.jpeg"
        title="Edición de videos"
      />
      <Card
        discount={0}
        slug="video"
        price={100}
        src="/images/image-card.jpeg"
        title="Edición de videos"
      />
      <Card
        discount={0}
        slug="video"
        price={100}
        src="/images/image-card.jpeg"
        title="Edición de videos"
      />
    </div>
  )
}

export default Feed
