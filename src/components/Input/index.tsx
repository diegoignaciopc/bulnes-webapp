import React from 'react'
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd'
import './styles.css'

interface InputProps extends AntdInputProps {
  label: string
}
function Input({ label, ...restProps }: InputProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <AntdInput {...restProps} />
    </div>
  )
}

export default Input
