import React from 'react'
import { Drawer as AntdDrawer, Space, DrawerProps as AntdDrawerProps } from 'antd'
import { Button, Input, Select } from './../'

const Extra = ({ onClose }: any) => {
  return (
    <Space>
      <Button onClick={onClose}>Cancelar</Button>
      <Button type="primary" onClick={() => null}>
        Guardar
      </Button>
    </Space>
  )
}

interface DrawerProps extends AntdDrawerProps {
  parkingSlotsListData: any[]
}
function Drawer({ visible, onClose, parkingSlotsListData }: DrawerProps) {
  return (
    <AntdDrawer
      title="Reservar"
      placement="right"
      onClose={onClose}
      width={400}
      visible={visible}
      extra={<Extra onClose={onClose} />}
    >
      <Input label="Patente" placeholder="Ingrese placa patente" />
      <Select
        options={parkingSlotsListData}
        placeholder="Seleccione plaza"
        title="Plaza estacionamiento"
      />
    </AntdDrawer>
  )
}

export default Drawer
