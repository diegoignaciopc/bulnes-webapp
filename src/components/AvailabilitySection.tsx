import React from 'react'
import SectionTitle from './SectionTitle'
import carImage from '../images/bulnes-car.png'

interface AvailabilitySectionProps {
  onParkingSlotClick: () => void
  parkingSlotsData: any
}
function AvailabilitySection({
  onParkingSlotClick,
  parkingSlotsData,
}: AvailabilitySectionProps) {
  return (
    <div>
      <SectionTitle title="Disponibilidad" />
      <div>
        <p>Disponible</p>
        <p>No disponible</p>
      </div>
      <div
        style={{
          width: '100%',
          backgroundColor: 'white',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {parkingSlotsData.map((parkingSlot: any, i: number) => (
          <div
            style={{
              color: parkingSlot.status === 'available' ? 'green' : 'red',
              backgroundColor: 'white',
              borderRadius: 50,
              padding: 20,
              fontSize: 18,
            }}
            key={i}
            onClick={onParkingSlotClick}
          >
            <img
              src={carImage}
              alt="bulnes-logo"
              style={{ height: 60, paddingRight: 5 }}
            />
            {parkingSlot.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailabilitySection
