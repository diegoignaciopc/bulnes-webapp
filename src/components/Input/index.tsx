import React from 'react'
import { Input as AntdInput } from 'antd'
import './styles.css'

interface InputProps {
  label: string
  text: string
}
function Input({ label, text }: InputProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <AntdInput placeholder={text} />
    </div>
  )
}

export default Input
