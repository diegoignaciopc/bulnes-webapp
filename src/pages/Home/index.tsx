import { Layout, Table } from 'antd'
import React, { useState } from 'react'
import carImage from '../../images/bulnes-car.png'
import './styles.css'

import { PieChart, SectionTitle, Drawer, Sider } from '../../components'
import * as data from './data'

const { Content } = Layout

function Home() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)

  const handleParkingSlotClick = (status: string) => {
    if (status === 'available') setVisible(true)
  }

  return (
    <div style={{ marginLeft: 200 }}>
      <Drawer
        visible={visible}
        onClose={onClose}
        parkingSlotsListData={data.parkingSlotsListData}
      />
      <Layout className="menu-layout">
        <Sider />
        <Layout>
          <Content>
            <div className="home-container">
              <div id="section1">
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
                  {data.parkingSlotsData.map((parkingSlot, i) => (
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
              <div id="section2">
                <SectionTitle
                  title="Reservaciones"
                  buttonTitle="Nueva reservación"
                  buttonAction={showDrawer}
                />
                <Table
                  columns={data.bookingColumns}
                  dataSource={data.bookingsListData}
                  pagination={false}
                />
              </div>
              <div id="section3" className="graphic-container">
                <SectionTitle title="Indicadores" />
                <div className="legend">
                  <div className="legend-aviable" />
                  <div>Disponible</div>
                  <div className="legend-unaviable" />
                  <div>Ocupado</div>
                </div>
                <PieChart data={data.pieChartData} />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Home
