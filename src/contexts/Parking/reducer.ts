import { ParkingState } from './context'

type FETCH_BOOKINGS_BEGINNING = { type: 'FETCH_BOOKINGS_BEGINNING' }
type FETCH_BOOKINGS_FINISHED = { type: 'FETCH_BOOKINGS_FINISHED' }
type SET_BOOKINGS = { type: 'SET_BOOKINGS'; bookings: any[] }
type FETCH_PARKING_SLOTS_BEGINNING = { type: 'FETCH_PARKING_SLOTS_BEGINNING' }
type FETCH_PARKING_SLOTS_FINISHED = { type: 'FETCH_PARKING_SLOTS_FINISHED' }
type SET_PARKING_SLOTS = { type: 'SET_PARKING_SLOTS'; parkingSlots: any[] }

export type ParkingActions =
  | SET_BOOKINGS
  | FETCH_BOOKINGS_BEGINNING
  | FETCH_BOOKINGS_FINISHED
  | SET_PARKING_SLOTS
  | FETCH_PARKING_SLOTS_BEGINNING
  | FETCH_PARKING_SLOTS_FINISHED

function reducer(state: ParkingState, action: ParkingActions): ParkingState {
  switch (action.type) {
    case 'FETCH_BOOKINGS_BEGINNING': {
      return { ...state, isLoadingBookings: true }
    }
    case 'FETCH_BOOKINGS_FINISHED': {
      return { ...state, isLoadingBookings: false }
    }
    case 'SET_BOOKINGS':
      return {
        ...state,
        bookings: action.bookings.reverse(),
      }
    case 'FETCH_PARKING_SLOTS_BEGINNING': {
      return { ...state, isLoadingParkingSlots: true }
    }
    case 'FETCH_PARKING_SLOTS_FINISHED': {
      return { ...state, isLoadingParkingSlots: false }
    }
    case 'SET_PARKING_SLOTS':
      return {
        ...state,
        parkingSlots: action.parkingSlots,
      }
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

export default reducer
