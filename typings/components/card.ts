type CardProps = {
  /**
   * Route parameter
   */
  slug: string
  /**
   * Path of the card image.
   */
  src: string
  /**
   * Name of the course
   */
  title: string
  price: number
  /**
   * Percent
   */
  discount: number
}

export type { CardProps }
