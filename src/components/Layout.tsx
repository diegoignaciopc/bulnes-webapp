import React, { ReactElement } from 'react'

function Layout({ children }: { children: ReactElement }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  )
}

export default Layout
