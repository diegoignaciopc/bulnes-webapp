import React from 'react'
import { Button as AntdButton, ButtonProps } from 'antd'
import './styles.css'

function Button({ children, ...restProps }: ButtonProps) {
  return (
    <AntdButton {...restProps} className="button-radius">
      {children}
    </AntdButton>
  )
}

export default Button
