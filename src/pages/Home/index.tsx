import React from 'react'
import { Table } from 'antd'
import SectionTitle from '../../components/SelectionTitle'
import { data, columns } from './data'
import './styles.css'

function Home() {
  return (
    <div className="main-container">
      <div className="column-title">
        <SectionTitle title="Disponibilidad" />
      </div>
      <div className="column-title">
        <SectionTitle title="Reservaciones" buttonTitle="Reservar" />
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      <div className="column-title">
        <SectionTitle title="Indicadores" />
      </div>
    </div>
  )
}

export default Home
