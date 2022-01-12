import { createContext } from 'react'

import { AuthActions } from './reducer'

export const AuthState = {
  isAuthenticated: false,
  isSignInLoading: false,
  name: '',
  email: '',
  phone: null as number | null,
}

export type AuthState = typeof AuthState

export const AuthContext = createContext<AuthState>(AuthState)
export type AuthDispatch = (action: AuthActions) => void
export const DispatchContext = createContext<AuthDispatch | undefined>(undefined)
