export const bookingColumns = [
  {
    title: 'Patente',
    dataIndex: 'plate',
  },
  {
    title: 'Fecha Inicio',
    dataIndex: 'startedAt',
  },
  {
    title: 'Fecha Final',
    dataIndex: 'finishedAt',
  },
  {
    title: 'Total ($)',
    dataIndex: 'total',
  },
  {
    title: 'Tiempo transcurrido',
    dataIndex: 'elapsedMinutes',
  },
]

export const bookingsListData = [
  {
    key: '1',
    parkingSlotId: '98dsf09889ds0f8',
    plate: 'JCZD39',
    startedAt: '00/00/0000',
    finishedAt: '00/00/0000',
    total: 2233,
    elapsedMinutes: 22,
  },
  {
    key: '4',
    parkingSlotId: '98dsf09889ds0f8',
    plate: '999D39',
    startedAt: '00/00/0000',
    finishedAt: '00/00/0000',
    total: 2233,
    elapsedMinutes: 22,
  },
  {
    key: '3',
    parkingSlotId: '98dsf09889ds0f8',
    plate: 'JKK39',
    startedAt: '00/00/0000',
    finishedAt: '00/00/0000',
    total: 2233,
    elapsedMinutes: 22,
  },
  {
    key: '2',
    parkingSlotId: '98dsf09889ds0f8',
    plate: 'JCZ449',
    startedAt: '00/00/0000',
    finishedAt: '00/00/0000',
    total: 2233,
    elapsedMinutes: 22,
  },
]

export const parkingSlotsData = [
  { id: '1', name: 'A01', status: 'available' },
  { id: '2', name: 'A02', status: 'unavailable' },
  { id: '3', name: 'A03', status: 'unavailable' },
  { id: '4', name: 'A04', status: 'available' },
  { id: '5', name: 'A05', status: 'unavailable' },
  { id: '6', name: 'A06', status: 'available' },
  { id: '7', name: 'A07', status: 'unavailable' },
  { id: '8', name: 'A08', status: 'available' },
  { id: '9', name: 'A09', status: 'available' },
  { id: '10', name: 'A10', status: 'available' },
  { id: '11', name: 'A11', status: 'available' },
  { id: '12', name: 'A12', status: 'available' },
  { id: '13', name: 'A13', status: 'available' },
  { id: '14', name: 'A14', status: 'available' },
  { id: '15', name: 'A15', status: 'unavailable' },
  { id: '16', name: 'A16', status: 'available' },
  { id: '17', name: 'A17', status: 'available' },
  { id: '18', name: 'A18', status: 'available' },
  { id: '19', name: 'A19', status: 'available' },
  { id: '20', name: 'A20', status: 'available' },
  { id: '21', name: 'A21', status: 'available' },
  { id: '22', name: 'A22', status: 'available' },
  { id: '23', name: 'A23', status: 'available' },
  { id: '24', name: 'A24', status: 'available' },
  { id: '25', name: 'A25', status: 'available' },
]

export const parkingSlotsListData = parkingSlotsData
  .filter((parkingSlot) => parkingSlot.status === 'available')
  .map((parkingSlot) => ({
    label: parkingSlot.name,
    value: parkingSlot.id,
  }))
