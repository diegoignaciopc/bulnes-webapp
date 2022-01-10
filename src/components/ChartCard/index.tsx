import React from 'react'
import './styles.css'
import { PieChart } from '../index'
import * as data from '../../pages/Home/data'

function ChartCard() {
  return (
    <div className="chart-card-container">
      <div className="chart-card">
        <div className="chart-container">
          <PieChart data={data.pieChartData} />
        </div>
        <div className="legend-container">
          <div className="legend-title">Niveles de ocupación de plazas</div>
          <div className="legend-label">
            <div className="dot-available" />
            <p>Disponible</p>
          </div>
          <div className="legend-label">
            <div className="dot-unavailable" />
            <p>No disponible</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartCard
