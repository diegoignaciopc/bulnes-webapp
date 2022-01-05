import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Login from './pages/Login'
import Home from './pages/Home'
import Layout from './components/Layout'

interface RequireAuthProps {
  children: ReactElement
  redirectTo: string
}
function RequireAuth({ children, redirectTo }: RequireAuthProps) {
  let isAuthenticated = false
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth redirectTo="/login">
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
)

reportWebVitals()
