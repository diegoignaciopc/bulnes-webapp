import { Layout, message, Popconfirm, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import carImage from '../../images/bulnes-car.png'
import './styles.css'

import { ChartCard, Drawer, SectionTitle, Sider } from '../../components'
import * as data from './data'
import { getAvailableParkingSlotsOptions } from './data'
import { useAuth } from '../../contexts/Auth'
import { useParking } from '../../contexts/Parking'
import { createBooking, finishBooking } from '../../services/Parking'
import dayjs from 'dayjs'

const { Content } = Layout

function timeConvert(n: number) {
  if (isNaN(n)) return ''
  const hours = n / 60
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  if (rhours === 0) return `${rminutes} minutos`
  return `${rhours} horas y ${rminutes} minutos`
}

function Home() {
  const [visible, setVisible] = useState(false)
  const [plate, setPlate] = useState(undefined)

  const [hourBookings, setHourBookings] = useState<number | undefined>(undefined)
  const [minuteBookings, setMinuteBookings] = useState<number | undefined>(undefined)

  const [parkingSlotId, setParkingSlotId] = useState(undefined)
  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)

  const onSaveBooking = async () => {
    if (!plate || !parkingSlotId) return message.error('Datos faltantes')
    try {
      await createBooking({ parkingSlotId, plate })
      message.success('Reservación guardada exitosamente')
      setVisible(false)
      await getBookings()
      await getParkingSlots()
    } catch (err) {
      message.error('Ocurrió un error')
    }
  }

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

  useEffect(() => {
    setHourBookings(bookings.filter((booking) => booking.elapsedMinutes >= 60).length)
    setMinuteBookings(bookings.filter((booking) => booking.elapsedMinutes < 60).length)
  }, [bookings])

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

  const availableSlots = parkingSlots.filter((ps) => ps.status === 'available').length
  const unavailableSlots = parkingSlots.filter((ps) => ps.status === 'unavailable').length
  return (
    <div style={{ marginLeft: 200 }}>
      <Drawer
        visible={visible}
        onClose={onClose}
        onChangePlate={(value: any) => setPlate(value)}
        onChangeParkingSlotId={(value: any) => setParkingSlotId(value)}
        onSave={onSaveBooking}
        parkingSlotsSelectOptions={getAvailableParkingSlotsOptions(parkingSlots)}
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
                          key={i}
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
                    dataSource={bookings.map((booking: any) => ({
                      ...booking,
                      total: isNaN(booking.total)
                        ? ''
                        : new Intl.NumberFormat('es-CL', {
                            currency: 'CLP',
                            style: 'currency',
                          }).format(booking.total),
                      elapsedMinutes: timeConvert(booking.elapsedMinutes),
                      startedAt: dayjs(booking.startedAt).format('DD/MM/YYYY HH:mm'),
                      finishedAt: booking?.finishedAt
                        ? dayjs(booking.finishedAt).format('DD/MM/YYYY HH:mm')
                        : '',
                    }))}
                    pagination={false}
                  />
                </div>
              </div>
              <div id="indicadores">
                <SectionTitle title="Indicadores" />
                <div className="charts-container">
                  <ChartCard
                    data={[
                      {
                        name: 'Available',
                        value: parkingSlots.filter((ps) => ps.status === 'available').length,
                      },
                      {
                        name: 'Unavailable',
                        value: parkingSlots.filter((ps) => ps.status === 'unavailable').length,
                      },
                    ]}
                    title="Niveles de ocupación de plazas"
                    values={[
                      { dotClassName: 'dot-available', value: `Disponible (${availableSlots})` },
                      {
                        dotClassName: 'dot-unavailable',
                        value: `No disponible (${unavailableSlots})`,
                      },
                    ]}
                  />
                  <ChartCard
                    data={[
                      { name: 'Hours', value: hourBookings || 0 },
                      { name: 'Minutes', value: minuteBookings },
                    ]}
                    title="Duración de reservaciones (tiempo promedio)"
                    values={[
                      {
                        dotClassName: 'dot-available',
                        value: `Más de 1 hora (${hourBookings || 0})`,
                      },
                      {
                        dotClassName: 'dot-unavailable',
                        value: `Menos de 1 hora (${minuteBookings})`,
                      },
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
