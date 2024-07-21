import { FC } from 'react'

import YandexMap from './YandexMap'


export type MapPointType = {
  address: string
  addressShort: string
  coords: [number, number]
}

export type MapProps = {
  point0: MapPointType
  point1: MapPointType
  hidePoints?: boolean
  routeImg: string
  mapImg: string
}


const Map: FC<MapProps> = (props) => {
  
  return (
    <YandexMap {...props} />
  )
}


export default Map
