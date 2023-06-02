import { ENDPOINTS } from '@constants'
import { RutasResponse } from '@typings'

async function fetchRutasApi() {
  const response = await fetch(ENDPOINTS.GET_RUTAS, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  const clonedResponse = response.clone()

  try {
    const json = await response.json()

    return json as RutasResponse
  } catch (error) {
    const text = await clonedResponse.text()

    return text
  }
}

export { fetchRutasApi }
