import jwtDecode from 'jwt-decode'

import * as config from '../../config'
import { authKeys, saveState } from '../../utils/localStorage'
import client from '../client'

interface AuthData {
  uid: string
  phone: number
  name: string
  email: string
}
const getAuthDataFromAccessToken = (accessToken: string): AuthData => {
  const { uid, name, phone, email }: AuthData = jwtDecode(accessToken)
  return { uid, name, phone, email }
}

export interface SignInParams {
  email: string
  password: string
}
export async function signIn({ email, password }: SignInParams) {
  const { data } = await client.post(`${config.BULNES_SERVICE_URL}/login`, { email, password })

  if (data?.token) {
    saveState(authKeys.accessToken, data.token)
    const authData: AuthData = getAuthDataFromAccessToken(data.token)
    saveState(authKeys.auth, authData)
    return authData
  }
  console.error('Cannot retrieve accessToken from Login api call')
}
