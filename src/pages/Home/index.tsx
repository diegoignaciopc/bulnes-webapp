import { Layout, Table, Popconfirm, message } from 'antd'
import React, { useState } from 'react'
import carImage from '../../images/bulnes-car.png'
import './styles.css'

import { SectionTitle, Drawer, Sider, ChartCard } from '../../components'
import * as data from './data'

const { Content } = Layout

function Home() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)

  function confirm(e: any) {
    console.log(e)
    message.success('Click on Yes')
  }

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
                <div className="availability-legend-container">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: 10,
                    }}
                  >
                    <div className="availability-dot-available" />
                    <p className="availability-legend-label">Disponible</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="availability-dot-unavailable" />
                    <p className="availability-legend-label">No disponible</p>
                  </div>
                </div>
                <div className="parking-slots-container">
                  {data.parkingSlotsData.map((parkingSlot, i) => {
                    if (parkingSlot.status === 'unavailable') {
                      return (
                        <Popconfirm
                          title="¿Seguro que desea Finalizar la reservación?"
                          onConfirm={confirm}
                          onCancel={() => null}
                          okText="Si, finalizar"
                          cancelText="No, esperar"
                        >
                          <div
                            className="parking-icon-unavailable"
                            key={i}
                            onClick={() =>
                              handleParkingSlotClick(parkingSlot.status)
                            }
                          >
                            <img
                              src={carImage}
                              alt="bulnes-logo"
                              style={{ height: 60, paddingRight: 5 }}
                            />
                            {parkingSlot.name}
                          </div>
                        </Popconfirm>
                      )
                    }
                    return (
                      <div
                        className="parking-icon-available"
                        key={i}
                        onClick={() =>
                          handleParkingSlotClick(parkingSlot.status)
                        }
                      >
                        <img
                          src={carImage}
                          alt="bulnes-logo"
                          style={{ height: 60, paddingRight: 5 }}
                        />
                        {parkingSlot.name}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div id="section2">
                <SectionTitle
                  title="Reservaciones"
                  buttonTitle="Nueva reservación"
                  buttonAction={showDrawer}
                />
                <div className="bookings-container">
                  <Table
                    bordered
                    columns={data.bookingColumns}
                    dataSource={data.bookingsListData}
                    pagination={false}
                  />
                </div>
              </div>
              <div id="section3">
                <SectionTitle title="Indicadores" />
                <div className="charts-container">
                  <ChartCard />
                  <ChartCard />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Home
