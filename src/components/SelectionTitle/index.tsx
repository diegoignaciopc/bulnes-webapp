import React from 'react'
import { Button } from 'antd'
import './styles.css'

interface SecionTitleProps {
  title: string
  buttonTitle?: string
}
function SectionTitle({ title, buttonTitle }: SecionTitleProps) {
  return (
    <div className="title-container">
      <p className="title">{title}</p>
      {buttonTitle && <Button type="primary">{buttonTitle}</Button>}
    </div>
  )
}

export default SectionTitle
