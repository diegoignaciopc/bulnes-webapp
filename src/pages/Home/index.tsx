import React from 'react'
import { Button, Input } from 'antd'

function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div>Seccion de parking slots disponibles u ocupados</div>
      <div>Seccion de tabla de historial de reservaciones</div>
      <div>Seccion de graficos o estadisticas</div>
    </div>
  )
}

export default Home
