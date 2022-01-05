import React from 'react'
import { Button } from 'antd'

interface SecionTitleProps {
  title: string
  buttonTitle?: string
}
function SectionTitle({ title, buttonTitle }: SecionTitleProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 0',
      }}
    >
      <p style={{ fontSize: 18, fontWeight: 'bold', margin: 0 }}>{title}</p>
      {buttonTitle && <Button type="primary">{buttonTitle}</Button>}
    </div>
  )
}

export default SectionTitle
