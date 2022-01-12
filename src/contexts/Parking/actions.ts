import { signIn, SignInParams } from '../../services/Auth'
import { ParkingDispatch, ParkingState } from './context'
import { clearState } from '../../utils/localStorage'
import { getBookings, getParkingSlots } from '../../services/Parking'

export function actionFetchBookings(dispatch: ParkingDispatch) {
  return async () => {
    try {
      dispatch({ type: 'FETCH_BOOKINGS_BEGINNING' })

      const bookings = await getBookings()
      dispatch({
        type: 'SET_BOOKINGS',
        bookings,
      })
      return { bookings }
    } catch (err) {
      console.error(err)
      throw err
    } finally {
      dispatch({ type: 'FETCH_BOOKINGS_FINISHED' })
    }
  }
}

export function actionFetchParkingSlots(dispatch: ParkingDispatch) {
  return async () => {
    try {
      dispatch({ type: 'FETCH_PARKING_SLOTS_BEGINNING' })

      const parkingSlots = await getParkingSlots()
      dispatch({
        type: 'SET_PARKING_SLOTS',
        parkingSlots,
      })
      return { parkingSlots }
    } catch (err) {
      console.error(err)
      throw err
    } finally {
      dispatch({ type: 'FETCH_PARKING_SLOTS_FINISHED' })
    }
  }
}
