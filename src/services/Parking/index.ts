import * as config from '../../config'
import client from '../client'

export async function getBookings() {
  const { data: response } = await client.get(`${config.BULNES_SERVICE_URL}/bookings`)
  if (response) return response.data
  console.error('Cannot retrieve bookings from Bulnes service')
}

export async function getParkingSlots() {
  const { data: response } = await client.get(`${config.BULNES_SERVICE_URL}/parkings`)
  if (response) return response.data
  console.error('Cannot retrieve parkingSlots from Bulnes service')
}

interface CreateBookingParams {
  plate: string
  parkingSlotId: string
}
export async function createBooking(params: CreateBookingParams) {
  const { data } = await client.post(`${config.BULNES_SERVICE_URL}/bookings`, { ...params })
  console.log({ create: data })
  console.error('Cannot retrieve bookings from Bulnes service')
}

interface FinishBookingParams {
  bookingId: string
}
export async function finishBooking(params: FinishBookingParams) {
  const { data } = await client.patch(
    `${config.BULNES_SERVICE_URL}/bookings/${params.bookingId}/finish`,
  )
  console.log({ finish: data })
  console.error('Cannot retrieve bookings from Bulnes service')
}
