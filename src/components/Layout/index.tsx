import React, { ReactElement } from 'react'
import './styles.css'

function Layout({ children }: { children: ReactElement }) {
  return <div className="layout-container">{children}</div>
}

export default Layout
