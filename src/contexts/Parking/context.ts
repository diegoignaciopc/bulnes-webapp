import { createContext } from 'react'

import { ParkingActions } from './reducer'

export const ParkingState = {
  bookings: [] as any[],
  parkingSlots: [] as any[],
  isLoadingBookings: false,
  isLoadingParkingSlots: false,
}

export type ParkingState = typeof ParkingState

export const ParkingContext = createContext<ParkingState>(ParkingState)
export type ParkingDispatch = (action: ParkingActions) => void
export const DispatchContext = createContext<ParkingDispatch | undefined>(undefined)
