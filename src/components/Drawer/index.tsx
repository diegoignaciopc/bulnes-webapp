import React, { useEffect, useState } from 'react'
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
  preselectedParkingSlotId?: string
}
function Drawer({
  visible,
  onClose,
  parkingSlotsSelectOptions,
  onChangeParkingSlotId,
  onChangePlate,
  onSave,
  preselectedParkingSlotId,
}: DrawerProps) {
  const [selectedOption, setSelectedOption] = useState<any>()
  const [inputValue, setInputValue] = useState<any>()

  useEffect(() => {
    if (preselectedParkingSlotId) {
      const option = parkingSlotsSelectOptions.find(
        (option) => option.value === preselectedParkingSlotId,
      )
      setSelectedOption(option.value)
      onChangeParkingSlotId(option.value)
    }
  }, [preselectedParkingSlotId])

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

  const onCloseDrawer = (e: any) => {
    setSelectedOption(undefined)
    if (onClose) onClose(e)
  }

  return (
    <AntdDrawer
      title="Reservar"
      placement="right"
      onClose={onCloseDrawer}
      width={400}
      visible={visible}
      extra={<Extra onClose={onCloseDrawer} onSave={onSaveForm} />}
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
