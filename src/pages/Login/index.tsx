import React from 'react'
import logo from '../../images/bulnesLogo.png'
import { Button, Input } from '../../components'
import './styles.css'

function Login() {
  return (
    <div className="login-main-container">
      <div className="login-form-container">
        <img src={logo} className="login-logo" alt="logo" />
        <Input label={'Nombre de Usuario'} placeholder={'Usuario'} />
        <Input label={'Contraseña'} placeholder={'Contraseña'} />
        <Button type="primary">Iniciar sesión</Button>
      </div>
    </div>
  )
}

export default Login
