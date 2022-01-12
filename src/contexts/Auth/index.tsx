import React, { ReactNode, useEffect, useReducer } from 'react'

import { authKeys, loadState, saveState } from '../../utils/localStorage'

import { actionReset, actionSignIn, actionSignOut } from './actions'
import { AuthContext, AuthState, DispatchContext } from './context'
import reducer from './reducer'

export function AuthProvider(props: { children: ReactNode }) {
  const { children } = props

  const hasAccessToken = !!loadState(authKeys.accessToken)
  const persistedState = loadState<AuthState>(authKeys.auth)

  const initialState = persistedState
    ? { ...persistedState, isAuthenticated: hasAccessToken, error: null }
    : AuthState

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    saveState(authKeys.auth, state)
  }, [state])

  return (
    <AuthContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const state = React.useContext(AuthContext)
  const dispatch = React.useContext(DispatchContext)

  if (state === undefined || dispatch === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return {
    state,
    reset: actionReset(dispatch),
    signIn: actionSignIn(dispatch),
    signOut: actionSignOut(),
  }
}
