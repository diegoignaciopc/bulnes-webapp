import React from 'react'
import { Select as AntdSelect, SelectProps as AntdSelectProps } from 'antd'

interface SelectProps extends AntdSelectProps {
  title?: string
}
function Select({ title, ...restProps }: SelectProps) {
  return (
    <div className="input-container">
      <label>{title}</label>
      <AntdSelect {...restProps} style={{ width: '100%' }} />
    </div>
  )
}

export default Select
