export const bookingColumns = [
  {
    title: 'Patente',
    dataIndex: 'plate',
  },
  {
    title: 'Plaza',
    dataIndex: 'parkingSlotName',
  },
  {
    title: 'Fecha Inicio',
    dataIndex: 'startedAt',
  },
  {
    title: 'Fecha Término',
    dataIndex: 'finishedAt',
  },
  {
    title: 'Total (CLP)',
    dataIndex: 'total',
  },
  {
    title: 'Tiempo transcurrido',
    dataIndex: 'elapsedMinutes',
  },
]

export const getAvailableParkingSlotsOptions = (parkingSlotsData: any[]) => {
  return parkingSlotsData
    .filter((parkingSlot) => parkingSlot.status === 'available')
    .map((parkingSlot) => ({
      label: parkingSlot.name,
      value: parkingSlot._id,
    }))
}
