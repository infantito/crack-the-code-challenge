import { RutasResponse } from '@typings'

async function fetchRutasApi() {
  const pathname = 'https://dev.backend.devcrackthecode.net/api/learning-paths/'

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

    return json as RutasResponse
  } catch (error) {
    const text = await clonedResponse.text()

    return text
  }
}

export { fetchRutasApi }
