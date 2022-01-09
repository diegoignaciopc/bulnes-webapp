import { Layout, Table, Popconfirm, message } from 'antd'
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

  function confirm(e: any) {
    console.log(e)
    message.success('Click on Yes')
  }

  function cancel(e: any) {
    console.log(e)
    message.error('Click on No')
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
                <div style={{ display: 'flex', marginBottom: 10 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: 10,
                    }}
                  >
                    <div
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 50,
                        backgroundColor: 'green',
                      }}
                    />
                    <p style={{ margin: 0, paddingLeft: 8 }}>Disponible</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 50,
                        backgroundColor: 'red',
                      }}
                    />
                    <p style={{ margin: 0, paddingLeft: 8 }}>No disponible</p>
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '30px 0',
                  }}
                >
                  {data.parkingSlotsData.map((parkingSlot, i) => {
                    if (parkingSlot.status === 'unavailable') {
                      return (
                        <Popconfirm
                          title="¿Seguro que desea Finalizar la reservación?"
                          onConfirm={confirm}
                          onCancel={cancel}
                          okText="Si, finalizar"
                          cancelText="No, esperar"
                        >
                          <div
                            style={{
                              color: 'red',
                              backgroundColor: 'white',
                              borderRadius: 50,
                              padding: 20,
                              fontSize: 18,
                            }}
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
                        style={{
                          color: 'green',
                          backgroundColor: 'white',
                          borderRadius: 50,
                          padding: 20,
                          fontSize: 18,
                        }}
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
                <div
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    padding: '30px',
                  }}
                >
                  <Table
                    bordered
                    columns={data.bookingColumns}
                    dataSource={data.bookingsListData}
                    pagination={false}
                  />
                </div>
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
