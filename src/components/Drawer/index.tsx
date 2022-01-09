import React from 'react'
import { Drawer as AntdDrawer, Space, DrawerProps } from 'antd'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'
import { parkingSlotsListData } from '../../pages/Home/data'

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

function Drawer({ visible, onClose }: DrawerProps) {
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
