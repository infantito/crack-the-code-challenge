import classnames from './footer.module.scss'

import * as React from 'react'
import Link from 'next/link'

import { Logo } from '@components'
import { Routes } from '@constants'

const Footer = () => {
  return (
    <footer className={classnames.footer}>
      <Link href={Routes.HOME}>
        <Logo />
      </Link>
    </footer>
  )
}

export default Footer
