import React from 'react'
import { Layout, Menu } from 'antd'
import logo from '../../images/bulnesLogo.png'

function Sider() {
  const { Sider } = Layout
  return (
    <Sider theme="light">
      <div className="menu-bar">
        <img src={logo} alt="bulnes-logo" className="logo-menu" />
        <p className="menu-title">Parkings</p>
      </div>
      <Menu theme="light" defaultSelectedKeys={['title1']} mode="inline">
        <Menu.Item key="title1">Disponibilidad</Menu.Item>
        <Menu.Item key="title2">Reservaciones</Menu.Item>
        <Menu.Item key="title3">Indicadores</Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sider
