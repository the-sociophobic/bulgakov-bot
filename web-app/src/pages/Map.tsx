import { FC } from 'react'


export type MapPointType = {
  address: string
  addressShort: string
  coords: [number, number]
}

export type MapProps = {
  point0: MapPointType
  point1: MapPointType
}


const Map: FC<MapProps> = ({
  point0,
  point1,
}) => {
  return (
    <div>
      Карта {point0.coords[0]}, {point0.coords[1]} → {point1.coords[0]}, {point1.coords[1]}
    </div>
  )
}


export default Map
