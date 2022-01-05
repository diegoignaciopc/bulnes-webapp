import React from 'react'
import { Input, Button } from 'antd'
import logo from '../../images/bulnesLogo.png'
import '../../images/logo.css'

function Login() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99b6de',
      }}
    >
      <div
        style={{
          padding: '120px 180px',
          borderRadius: 15,
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        <img src={logo} className="logo" alt="logo" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <p style={{ margin: 0 }}>Nombre de usuario</p>
          <Input placeholder="Usuario" />
        </div>
        <div>
          <p style={{ margin: 0 }}>Contraseña</p>
          <Input placeholder="Contraseña" />
        </div>
        <br />
        <Button type="primary" style={{ borderRadius: 6 }}>
          Iniciar sesión
        </Button>
      </div>
    </div>
  )
}

export default Login
