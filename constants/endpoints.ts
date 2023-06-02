import { API_DOMAIN } from './env'

const ENDPOINTS = {
  GET_RUTAS: `${API_DOMAIN}/api/learning-paths/`,
  GET_RUTA_BY_SLUG: `${API_DOMAIN}/api/learning-paths-all/:slug/`,
}

export { ENDPOINTS }
