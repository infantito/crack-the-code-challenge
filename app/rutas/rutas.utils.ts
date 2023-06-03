import type { RutasResponse } from '@typings'
import { API_DOMAIN } from '@constants'

async function fetchRutas() {
  const pathname = `${API_DOMAIN}/api/rutas/`

  const response = await fetch(pathname, {
    cache: 'no-store',
  })

  const json = await response.json()

  return json as RutasResponse
}

export { fetchRutas }
