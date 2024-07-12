import { FC } from 'react'

import YandexMap from '../components/YandexMap'


export type MapPointType = {
  address: string
  addressShort: string
  coords: [number, number]
}

export type MapProps = {
  point0: MapPointType
  point1: MapPointType
}


const Map: FC<MapProps> = (props) => {
  
  return (
    <YandexMap {...props} />
  )
}


export default Map
