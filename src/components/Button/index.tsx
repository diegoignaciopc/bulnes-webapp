import React from 'react'
import { Button as AntdButton, ButtonProps } from 'antd'

function Button({ children, ...restProps }: ButtonProps) {
  return (
    <AntdButton {...restProps} style={{ borderRadius: 6 }}>
      {children}
    </AntdButton>
  )
}

export default Button
