import { signIn, SignInParams } from '../../services/Auth'
import { AuthDispatch } from './context'
import { clearState } from '../../utils/localStorage'

export function actionReset(dispatch: AuthDispatch) {
  return () => dispatch({ type: 'RESET' })
}

export function actionSignIn(dispatch: AuthDispatch) {
  return async ({ email, password }: SignInParams) => {
    try {
      dispatch({ type: 'SIGN_IN_BEGINNING' })

      const signInData = await signIn({ email, password })
      dispatch({ type: 'SIGN_IN' })

      dispatch({
        type: 'SET_USER',
        name: signInData?.name ?? '',
        email: signInData?.email ?? '',
        phone: signInData?.phone ?? null,
      })

      return { authData: signInData }
    } finally {
      dispatch({ type: 'SIGN_IN_FINISHED' })
    }
  }
}

export function actionSignOut() {
  return () => {
    clearState()
    window.location.pathname = '/login'
  }
}
