import React, { useState } from 'react'
import { Drawer as AntdDrawer, Space, DrawerProps as AntdDrawerProps } from 'antd'
import { Button, Input, Select } from './../'

const Extra = ({ onClose, onSave }: any) => {
  return (
    <Space>
      <Button onClick={onClose}>Cancelar</Button>
      <Button type="primary" onClick={onSave}>
        Guardar
      </Button>
    </Space>
  )
}

interface DrawerProps extends AntdDrawerProps {
  parkingSlotsSelectOptions: any[]
  onChangeParkingSlotId: (value: any) => void
  onChangePlate: (value: any) => void
  onSave: () => void
}
function Drawer({
  visible,
  onClose,
  parkingSlotsSelectOptions,
  onChangeParkingSlotId,
  onChangePlate,
  onSave,
}: DrawerProps) {
  const [selectedOption, setSelectedOption] = useState()
  const [inputValue, setInputValue] = useState()

  const onChangeSelect = (value: any) => {
    setSelectedOption(value)
    onChangeParkingSlotId(value)
  }

  const onChangeInput = (event: any) => {
    setInputValue(event.target.value.toUpperCase())
    onChangePlate(event.target.value.toUpperCase())
  }

  const onSaveForm = () => {
    onSave()
    setSelectedOption(undefined)
    setInputValue(undefined)
  }

  return (
    <AntdDrawer
      title="Reservar"
      placement="right"
      onClose={onClose}
      width={400}
      visible={visible}
      extra={<Extra onClose={onClose} onSave={onSaveForm} />}
    >
      <Input
        maxLength={6}
        label="Patente"
        placeholder="Ingrese placa patente"
        onChange={onChangeInput}
        value={inputValue}
      />
      <Select
        value={selectedOption}
        options={parkingSlotsSelectOptions}
        placeholder="Seleccione plaza"
        title="Plaza estacionamiento"
        onChange={onChangeSelect}
      />
    </AntdDrawer>
  )
}

export default Drawer
