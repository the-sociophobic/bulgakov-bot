import { FC, useEffect, useState } from 'react'

import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  // YMapDefaultMarker,
  YMapMarker
} from 'ymap3-components'

import { MapPointType } from './index'
import UserPoint from './UserPoint'
import ImgFramed from '../ImgFramed'
import Img from '../Img'


export type YandexMapProps = {
  point0: MapPointType
  point1: MapPointType
  hidePoints?: boolean
  routeImg: string
  mapImg: string
}


const YandexMap: FC<YandexMapProps> = ({
  point0,
  point1,
  hidePoints,
  routeImg,
  mapImg
}) => {
  const [userGeo, setUserGeo] = useState([0, 0])
  const { ymaps3 } = window
  const updUserGeo = async () => {
    const geo = await ymaps3.geolocation.getPosition()

    setUserGeo(geo.coords)
  }
  useEffect(() => {
    updUserGeo()
    // const intervalId = setInterval(updUserGeo, 300)

    // return () => clearInterval(intervalId)
  }, [])


  return userGeo[0] === 0 ?
    <ImgFramed
      src={mapImg}
      className='mx-auto my-2'
      width={300}
      height={180}
    />
    :
    <div className='YandexMap__container mb-2'>
      <div className='YandexMap'>
        <YMap
          location={{
            center: getCenter(point0, point1),
            // center: userGeo,
            zoom: getZoom(point0, point1)
          }}
        >
          <YMapDefaultSchemeLayer
            customization={[
              {
                tags: {
                  any: ['poi', 'transit']
                },
                stylers: [{ opacity: 0 }]
              },
            ]}
          />
          <YMapDefaultFeaturesLayer />
          {!hidePoints && <>
            {/* <YMapDefaultMarker
              title='Отсюда'
              color='brown'
              coordinates={point0.coords}
            /> */}
            {/* <YMapDefaultMarker
              title='Сюда'
              color='red'
              coordinates={point1.coords}
            /> */}
          </>}
          {/* <YMapMarker coordinates={userGeo}>
            <RouteImg img={routeImg} />
          </YMapMarker> */}
          <YMapMarker coordinates={userGeo}>
            <UserPoint />
          </YMapMarker>
        </YMap>
      </div>
      <Img
        src={routeImg}
        className='YandexMap__routeImg'
      />
    </div>
}


export default YandexMap


const getCenter = (
  point0: MapPointType,
  point1: MapPointType,
) => {
  const center: [number, number] = [
    (point0.coords[0] + point1.coords[0]) / 2,
    (point0.coords[1] + point1.coords[1]) / 2,
  ]

  return center
}

const getZoom = (
  point0: MapPointType,
  point1: MapPointType,
) => {
  const distance = Math.sqrt((point0.coords[0] - point1.coords[0]) ** 2 + (point0.coords[1] - point1.coords[1]) ** 2) * 10000
  const distanceZoom = [[15, 16.2], [47, 14.8]]
  const interpolated = distanceZoom[0][1] + (distance - distanceZoom[0][0]) / (distanceZoom[1][0] - distanceZoom[0][0]) * (distanceZoom[1][1] - distanceZoom[0][1])

  return interpolated
}