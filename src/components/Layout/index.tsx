import React, { ReactElement } from 'react'
import './styles.css'
function Index({ children }: { children: ReactElement }) {
  return <div className="layout-container">{children}</div>
}

export default Index
