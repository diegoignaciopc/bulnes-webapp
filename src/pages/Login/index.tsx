import React from 'react'
import { Button } from 'antd'
import logo from '../../images/bulnesLogo.png'
import Input from '../../components/Input'
import './styles.css'

function Login() {
  return (
    <div className="main-container">
      <div className="container">
        <img src={logo} className="logo" alt="logo" />
        <div className="input-container">
          <Input label={'Nombre de Usuario'} text={'Usuario'} />
        </div>
        <div className="input-container">
          <Input label={'Contraseña'} text={'Contraseña'} />
        </div>
        <br />
        <Button type="primary" className="button">
          Iniciar sesión
        </Button>
      </div>
    </div>
  )
}

export default Login
