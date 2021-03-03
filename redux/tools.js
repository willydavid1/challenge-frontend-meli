import axios from 'axios'

export const BASE_URL = 'https://api.mercadolibre.com/'

export const apiResquest = (url = null, options = {}) => {
  return axios({
    method: options?.method?.toUpperCase(),
    url,
    data: options?.data ?? null,
    ...(options?.extra || {})
  })
}
