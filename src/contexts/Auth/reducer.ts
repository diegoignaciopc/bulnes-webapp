import { AuthState } from './context'

type SIGN_IN_BEGINNING = { type: 'SIGN_IN_BEGINNING' }
type SIGN_IN_FINISHED = { type: 'SIGN_IN_FINISHED' }
type SIGN_IN = { type: 'SIGN_IN' }
type SIGN_OUT = { type: 'SIGN_OUT' }
type SET_USER = {
  type: 'SET_USER'
  name: string
  email: string
  phone: number | null
}
type RESET = { type: 'RESET' }

export type AuthActions =
  | SIGN_IN_BEGINNING
  | SIGN_IN_FINISHED
  | SIGN_IN
  | SET_USER
  | SIGN_OUT
  | RESET

function reducer(state: AuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case 'SIGN_IN_BEGINNING': {
      return { ...state, isSignInLoading: true }
    }
    case 'SIGN_IN_FINISHED': {
      return { ...state, isSignInLoading: false }
    }
    case 'SIGN_IN':
      return {
        ...state,
        isAuthenticated: true,
      }
    case 'SET_USER':
      return {
        ...state,
        email: action.email,
        name: action.name,
        phone: action.phone,
      }
    case 'SIGN_OUT':
      return AuthState
    case 'RESET':
      return AuthState
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

export default reducer
