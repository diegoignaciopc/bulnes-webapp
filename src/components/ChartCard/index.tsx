import React from 'react'
import './styles.css'
import { PieChart } from '../index'

interface LegendValue {
  dotClassName: string
  value: string
}
interface ChartCardProps {
  data: any
  title: string
  values: LegendValue[]
}
function ChartCard({ data, title, values }: ChartCardProps) {
  return (
    <div className="chart-card-container">
      <div className="chart-card">
        <div className="chart-container">
          <PieChart data={data} />
        </div>
        <div className="legend-container">
          <div className="legend-title">{title}</div>
          {values.map((item) => (
            <div className="legend-label">
              <div className={item.dotClassName} />
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChartCard
