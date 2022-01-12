import React, { ReactNode, useReducer } from 'react'

import { actionFetchBookings, actionFetchParkingSlots } from './actions'
import { ParkingContext, DispatchContext, ParkingState } from './context'
import reducer from './reducer'

export function ParkingProvider(props: { children: ReactNode }) {
  const { children } = props

  const [state, dispatch] = useReducer(reducer, ParkingState)

  return (
    <ParkingContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </ParkingContext.Provider>
  )
}

export function useParking() {
  const state = React.useContext(ParkingContext)
  const dispatch = React.useContext(DispatchContext)

  if (state === undefined || dispatch === undefined) {
    throw new Error('useParking must be used within an ParkingProvider')
  }

  return {
    state,
    getBookings: actionFetchBookings(dispatch),
    getParkingSlots: actionFetchParkingSlots(dispatch),
  }
}
