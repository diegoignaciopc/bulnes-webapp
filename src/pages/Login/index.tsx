import React from 'react'
import { Input, Button } from 'antd'

function Login() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <div>
          <p style={{ margin: 0 }}>Nombre de usuario</p>
          <Input placeholder="Usuario" />
        </div>
        <div>
          <p style={{ margin: 0 }}>Contraseña</p>
          <Input placeholder="Contraseña" />
        </div>
        <br />
        <Button type="primary">Iniciar sesión</Button>
      </div>
    </div>
  )
}

export default Login
