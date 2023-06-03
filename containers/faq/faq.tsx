'use client'

import classnames from './faq.module.scss'

import * as React from 'react'

import type { RutaDetailFaq, RutaDetailResponse } from '@typings'

const FaqItem = (props: RutaDetailFaq) => {
  const [collapsed, setCollapsed] = React.useState(false)

  const handleCollapse = () => {
    setCollapsed(prevCollapsed => !prevCollapsed)
  }

  return (
    <div className={classnames.item}>
      <button type="button" onClick={handleCollapse} className={classnames.item__question}>
        <span>{props.question}</span>
        <span>{collapsed ? '➖' : '➕'}</span>
      </button>
      <div className={`${classnames.item__answer} ${collapsed ? classnames.collapsed : ''}`}>
        <p className={classnames.item__description}>{props.answer}</p>
      </div>
    </div>
  )
}

const Faq = (props: Pick<RutaDetailResponse, 'faqs'>) => {
  const { faqs } = props

  return (
    <div className={classnames.faq}>
      <h3 className={classnames.faq__title}>Preguntas frecuentes</h3>
      <div className={classnames.faq__list}>
        {faqs.map(faq => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
    </div>
  )
}

export default Faq
