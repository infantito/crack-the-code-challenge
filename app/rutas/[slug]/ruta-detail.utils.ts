import type { Ruta, RutaDetailResponse } from '@typings'
import { API_DOMAIN } from '@constants'

async function fetchRutaBySlug(slug: Ruta['slug']) {
  const pathname = `${API_DOMAIN}/api/rutas/${slug}/`

  const response = await fetch(pathname, {
    cache: 'no-store',
  })

  const json = await response.json()

  return json as RutaDetailResponse
}

export { fetchRutaBySlug }
