import React from 'react'
import { Table } from 'antd'
import SectionTitle from '../../components/SectionTitle'

const columns = [
  {
    title: 'Patente',
    dataIndex: 'plate',
  },
  {
    title: 'Fecha Inicio',
    dataIndex: 'startedAt',
  },
  {
    title: 'Fecha Final',
    dataIndex: 'finishedAt',
  },
  {
    title: 'Total ($)',
    dataIndex: 'total',
  },
  {
    title: 'Tiempo transcurrido',
    dataIndex: 'elapsedMinutes',
  },
]

const data = [
  {
    key: '1',
    parkingSlotId: '98dsf09889ds0f8',
    plate: 'JCZD39',
    startedAt: '00/00/0000',
    finishedAt: '00/00/0000',
    total: 2233,
    elapsedMinutes: 22,
  },
  {
    key: '4',
    parkingSlotId: '98dsf09889ds0f8',
    plate: '999D39',
    startedAt: '00/00/0000',
    finishedAt: '00/00/0000',
    total: 2233,
    elapsedMinutes: 22,
  },
  {
    key: '3',
    parkingSlotId: '98dsf09889ds0f8',
    plate: 'JKK39',
    startedAt: '00/00/0000',
    finishedAt: '00/00/0000',
    total: 2233,
    elapsedMinutes: 22,
  },
  {
    key: '2',
    parkingSlotId: '98dsf09889ds0f8',
    plate: 'JCZ449',
    startedAt: '00/00/0000',
    finishedAt: '00/00/0000',
    total: 2233,
    elapsedMinutes: 22,
  },
]

function Home() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100%',
        display: 'flex',
        padding: '0 100px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ border: '1px solid gray', width: '100%' }}>
        <SectionTitle title="Disponibilidad" />
      </div>
      <div style={{ width: '100%' }}>
        <SectionTitle title="Reservaciones" buttonTitle="Reservar" />
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      <div style={{ border: '1px solid gray', width: '100%' }}>
        <SectionTitle title="Indicadores" />
      </div>
    </div>
  )
}

export default Home
