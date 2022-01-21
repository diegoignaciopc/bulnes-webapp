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
  const hasNoData = data[0].value === 0 && data[1].value === 0
  return (
    <div className="chart-card-container">
      <div className="chart-card">
        <div className="chart-container">
          {hasNoData ? <div style={{ marginLeft: 80 }}>Sin datos</div> : <PieChart data={data} />}
        </div>
        <div className="legend-container">
          <div className="legend-title">{title}</div>
          {values.map((item, i) => (
            <div key={i} className="legend-label">
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
