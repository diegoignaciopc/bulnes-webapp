import { Layout, Table, Popconfirm, message, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import carImage from '../../images/bulnes-car.png'
import './styles.css'

import { SectionTitle, Drawer, Sider, ChartCard } from '../../components'
import * as data from './data'
import { useAuth } from '../../contexts/Auth'
import { useParking } from '../../contexts/Parking'
import { getAvailableParkingSlotsOptions } from './data'
import { finishBooking } from '../../services/Parking'

const { Content } = Layout

function Home() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)

  const {
    state: { name },
    signOut,
  } = useAuth()

  const {
    getParkingSlots,
    getBookings,
    state: { bookings, parkingSlots, isLoadingBookings },
  } = useParking()

  useEffect(() => {
    const init = async () => {
      await getBookings()
      await getParkingSlots()
    }
    init()
  }, [])

  const confirm = async (bookingReference: string) => {
    try {
      await finishBooking({ bookingId: bookingReference })
      message.success('Reservación finalizada exitosamente')
      await getBookings()
      await getParkingSlots()
    } catch (e) {
      message.error('Error al finalizar reservación: ' + bookingReference)
    }
  }

  const handleParkingSlotClick = (status: string) => {
    if (status === 'available') setVisible(true)
  }

  return (
    <div style={{ marginLeft: 200 }}>
      <Drawer
        visible={visible}
        onClose={onClose}
        parkingSlotsListData={getAvailableParkingSlotsOptions(parkingSlots)}
      />
      <Layout className="menu-layout">
        <Sider />
        <Layout>
          <Content>
            <div className="home-container">
              <div style={{ alignSelf: 'self-end', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 18, fontWeight: 'bold' }}>Bienvenido, {name} 👋🏼</div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#40A9FF',
                    cursor: 'pointer',
                    alignSelf: 'self-end',
                  }}
                  onClick={signOut}
                >
                  Cerrar sesión
                </div>
              </div>
              <div id="disponibilidad">
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
                  {parkingSlots.map((parkingSlot, i) => {
                    if (parkingSlot.status === 'unavailable') {
                      return (
                        <Popconfirm
                          title="¿Seguro que desea Finalizar la reservación?"
                          onConfirm={() => confirm(parkingSlot.bookingReference)}
                          onCancel={() => null}
                          okText="Si, finalizar"
                          cancelText="No, esperar"
                        >
                          <div
                            className="parking-icon-unavailable"
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
                        </Popconfirm>
                      )
                    }
                    return (
                      <div
                        className="parking-icon-available"
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
                    )
                  })}
                </div>
              </div>
              <div id="reservaciones">
                <SectionTitle
                  title="Reservaciones"
                  buttonTitle="Nueva reservación"
                  buttonAction={showDrawer}
                />
                <div className="bookings-container">
                  <Table
                    title={() => 'Valor por minuto de reservación de plazas: CLP $15 💰'}
                    loading={isLoadingBookings}
                    bordered
                    columns={data.bookingColumns}
                    dataSource={bookings}
                    pagination={false}
                  />
                </div>
              </div>
              <div id="indicadores">
                <SectionTitle title="Indicadores" />
                <div className="charts-container">
                  <ChartCard
                    data={data.pieChartData}
                    title="Niveles de ocupación de plazas"
                    values={[
                      { dotClassName: 'dot-available', value: 'Disponible' },
                      { dotClassName: 'dot-unavailable', value: 'No disponible' },
                    ]}
                  />
                  <ChartCard
                    data={data.pieChartData}
                    title="Duración de reservaciones (tiempo promedio)"
                    values={[
                      { dotClassName: 'dot-available', value: 'Más de 1 hora' },
                      { dotClassName: 'dot-unavailable', value: 'Menos de 1 hora' },
                    ]}
                  />
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
