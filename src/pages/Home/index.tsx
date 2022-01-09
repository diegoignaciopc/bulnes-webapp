import { Layout, Table } from 'antd'
import React, { useState } from 'react'
import carImage from '../../images/bulnes-car.png'
import './styles.css'

import Graphic from '../../components/PieChart/index'
import SectionTitle from './../../components/SelectionTitle'

import {
  bookingColumns,
  bookingsListData,
  parkingSlotsData,
  pieChartData,
} from './data'
import Drawer from '../../components/Drawer'
import Sider from '../../components/Sider'

const { Content } = Layout

function Home() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)

  const handleParkingSlotClick = (status: string) => {
    if (status === 'available') setVisible(true)
  }

  return (
    <div>
      <Drawer visible={visible} onClose={onClose} />
      <Layout className="menu-layout">
        <Sider />
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
                  buttonTitle="Nueva reservación"
                  buttonAction={showDrawer}
                />
                <Table
                  columns={bookingColumns}
                  dataSource={bookingsListData}
                  pagination={false}
                />
              </div>
              <div className="column-title, graphic-container">
                <SectionTitle title="Indicadores" />
                <div className="legend">
                  <div className="legend-aviable" />
                  <div>Disponible</div>
                  <div className="legend-unaviable" />
                  <div>Ocupado</div>
                </div>
                <Graphic data={pieChartData} />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Home
