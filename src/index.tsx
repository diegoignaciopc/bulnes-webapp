import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login } from './pages'
import { RequireAuth, Layout } from './components'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { AuthProvider } from './contexts/Auth'
import { ParkingProvider } from './contexts/Parking'

ReactDOM.render(
  <AuthProvider>
    <ParkingProvider>
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
      </BrowserRouter>
    </ParkingProvider>
  </AuthProvider>,
  document.getElementById('root'),
)

reportWebVitals()
