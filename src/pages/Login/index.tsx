import React, { useEffect, useState } from 'react'
import logo from '../../images/bulnesLogo.png'
import { Button, Input } from '../../components'
import './styles.css'
import { useAuth } from '../../contexts/Auth'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)

  const onChangeEmail = (e: any) => setEmail(e.target.value)
  const onChangePassword = (e: any) => setPassword(e.target.value)

  const {
    signIn,
    state: { isSignInLoading, isAuthenticated },
  } = useAuth()

  console.log(isSignInLoading)

  const navigate = useNavigate()

  const onSubmit = async () => {
    try {
      const data = await signIn({ email, password })
      if (data) return navigate('/')
    } catch (e: any) {
      setError(e?.response?.data?.message ?? 'Ocurrió un error')
    }
  }

  useEffect(() => {
    if (isAuthenticated) return navigate('/')
  }, [])

  return (
    <div className="login-main-container">
      <div className="login-form-container">
        <img src={logo} className="login-logo" alt="logo" />
        <Input
          label="Correo electrónico"
          placeholder="Correo electrónico"
          onChange={onChangeEmail}
        />
        <Input
          label="Contraseña"
          placeholder="Contraseña"
          onChange={onChangePassword}
          type="password"
        />
        <Button type="primary" onClick={onSubmit} loading={isSignInLoading}>
          Iniciar sesión
        </Button>
        {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      </div>
    </div>
  )
}

export default Login
