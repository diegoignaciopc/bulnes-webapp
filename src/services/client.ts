import axios, { AxiosInstance } from 'axios'

import * as config from '../config'
import { loadState } from '../utils/localStorage'

export function insertAuthorizationHeader(api: any) {
  const token = loadState<string>('token') || ''
  try {
    api.headers.Authorization = `Bearer ${token}`
    return api
  } catch (err) {
    return Promise.reject(err)
  }
}

const client: AxiosInstance = axios.create({
  baseURL: config.BULNES_SERVICE_URL,
})

client.interceptors.request.use(insertAuthorizationHeader, (error: any) => Promise.reject(error))

export default client
