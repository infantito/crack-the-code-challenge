import { fetchRutasApi } from '@services'

async function fetchRutas() {
  const response = await fetchRutasApi()

  return response
}

export { fetchRutas }
