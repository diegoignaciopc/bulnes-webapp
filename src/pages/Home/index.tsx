import { Layout, Menu, Table, Drawer, Space } from 'antd'
import React, { useState } from 'react'
import logo from '../../images/bulnesLogo.png'
import carImage from '../../images/bulnes-car.png'
import './styles.css'

import SectionTitle from './../../components/SelectionTitle'
import Button from './../../components/Button'
import Select from './../../components/Select'

import {
  bookingColumns,
  bookingsListData,
  parkingSlotsData,
  parkingSlotsListData,
} from './data'
import Input from '../../components/Input'

const { Sider, Content } = Layout

function Home() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)

  const handleParkingSlotClick = (status: string) => {
    if (status === 'available') setVisible(true)
  }

  return (
    <div>
      <Drawer
        title="Reservar"
        placement="right"
        onClose={onClose}
        width={400}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="primary" onClick={() => null}>
              Guardar
            </Button>
          </Space>
        }
      >
        <Input label="Patente" placeholder="Ingrese placa patente" />
        <Select
          options={parkingSlotsListData}
          placeholder="Seleccione plaza"
          title="Plaza estacionamiento"
        />
      </Drawer>
      <Layout className="menu-layout">
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
        <Layout>
          <Content>
            <div className="home-container">
              <div className="column-title">
                <SectionTitle title="Disponibilidad" />
                <div>
                  <p>Disponible</p>
                  <p>No disponible</p>
                </div>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {parkingSlotsData.map((parkingSlot, i) => (
                    <div
                      style={{
                        color:
                          parkingSlot.status === 'available' ? 'green' : 'red',
                        backgroundColor: 'white',
                        borderRadius: 50,
                        padding: 20,
                        fontSize: 18,
                      }}
                      key={i}
                      onClick={() => handleParkingSlotClick(parkingSlot.status)}
                    >
                      <img
                        src={carImage}
                        alt="bulnes-logo"
                        style={{ height: 60, paddingRight: 5 }}
                      />
                      {parkingSlot.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="column-title">
                <SectionTitle
                  title="Reservaciones"
                  buttonTitle="Reservar"
                  buttonAction={showDrawer}
                />
                <Table
                  columns={bookingColumns}
                  dataSource={bookingsListData}
                  pagination={false}
                />
              </div>
              <div className="column-title">
                <SectionTitle title="Indicadores" />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Home
