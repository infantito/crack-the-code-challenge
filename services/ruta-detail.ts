import type { Ruta, RutaDetailResponse } from '@typings'

async function fetchRutaBySlugApi(params: Pick<Ruta, 'slug'>) {
  const { slug } = params

  const pathname = `https://dev.backend.devcrackthecode.net/api/learning-paths-all/${slug}/`

  const response = await fetch(pathname, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  const clonedResponse = response.clone()

  try {
    const json = await response.json()

    return json as RutaDetailResponse
  } catch (error) {
    const text = await clonedResponse.text()

    return text
  }
}

export { fetchRutaBySlugApi }
