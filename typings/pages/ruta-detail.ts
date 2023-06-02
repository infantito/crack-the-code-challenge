import type { Ruta } from '@typings/services'

type RutaDetailParams = Pick<Ruta, 'slug'>

type RutaDetailProps = {
  params: RutaDetailParams
}

export type { RutaDetailProps, RutaDetailParams }
