import React from 'react'
import { Input as AntdInput } from 'antd'
import './styles.css'

interface LabelProps {
  label: string
  text: string
}
function Input({ label, text }: LabelProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <AntdInput placeholder={text} />
    </div>
  )
}

export default Input
