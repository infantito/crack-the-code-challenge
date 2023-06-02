import type { Ruta } from '@typings'
import { fetchRutaBySlugApi } from '@services'

async function fetchRutaBySlug(slug: Ruta['slug']) {
  const response = await fetchRutaBySlugApi({ slug })

  return response
}

export { fetchRutaBySlug }
