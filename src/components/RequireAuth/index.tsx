import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth'

interface RequireAuthProps {
  children: ReactElement
  redirectTo: string
}
function RequireAuth({ children, redirectTo }: RequireAuthProps) {
  const {
    state: { isAuthenticated },
  } = useAuth()
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default RequireAuth
