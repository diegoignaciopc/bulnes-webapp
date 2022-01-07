import React from 'react'

import './styles.css'
import Button from './../Button'

interface SecionTitleProps {
  title: string
  buttonTitle?: string
  buttonAction?: () => void
}
function SectionTitle({ title, buttonTitle, buttonAction }: SecionTitleProps) {
  return (
    <div className="title-container">
      <p className="title-size">{title}</p>
      {buttonTitle && buttonAction && (
        <Button type="primary" onClick={buttonAction}>
          {buttonTitle}
        </Button>
      )}
    </div>
  )
}

export default SectionTitle
