import React from 'react'
import { Layout, Menu } from 'antd'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../images/bulnesLogo.png'

function Sider() {
  const { Sider } = Layout
  return (
    <Sider
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="menu-bar">
        <img src={logo} alt="bulnes-logo" className="logo-menu" />
        <p className="menu-title">Parkings</p>
      </div>
      <Menu theme="light" defaultSelectedKeys={['title1']} mode="inline">
        <Menu.Item key="title1">
          <Link to="#section1">Disponibilidad</Link>
        </Menu.Item>
        <Menu.Item key="title2">
          <Link to="#section2">Reservaciones</Link>
        </Menu.Item>
        <Menu.Item key="title3">
          <Link to="#section3">Indicadores</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sider
