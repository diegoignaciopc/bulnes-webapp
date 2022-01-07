import React from 'react'
import { Button as AntdButton, ButtonProps } from 'antd'

function Button({ children, ...restProps }: ButtonProps) {
  return (
    <AntdButton {...restProps} className="button-radius">
      {children}
    </AntdButton>
  )
}

export default Button
