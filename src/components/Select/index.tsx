import React from 'react'
import { Select as AntdSelect, SelectProps as AntdSelectProps } from 'antd'
import './styles.css'

interface SelectProps extends AntdSelectProps {
  title?: string
}
function Select({ title, ...restProps }: SelectProps) {
  return (
    <div className="input-container">
      <label>{title}</label>
      <AntdSelect {...restProps} className="select-width" />
    </div>
  )
}

export default Select
