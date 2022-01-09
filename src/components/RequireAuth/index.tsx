import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

interface RequireAuthProps {
  children: ReactElement
  redirectTo: string
}
function RequireAuth({ children, redirectTo }: RequireAuthProps) {
  let isAuthenticated = true
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default RequireAuth
