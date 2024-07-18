// import React, { FC, useEffect } from 'react'
// import ReactDOM from 'react-dom/client'
import { FC } from 'react'

import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
} from 'ymap3-components'

import { MapPointType } from '../pages/Map'


// const { ymaps3 } = window
// const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify')
// const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM)
// const {
//   YMap: _YMap,
//   YMapComponentsProvider: _YMapComponentsProvider,
//   YMapDefaultSchemeLayer: _YMapDefaultSchemeLayer,
//   YMapDefaultFeaturesLayer: _YMapDefaultFeaturesLayer,
//   YMapDefaultMarker: _YMapDefaultMarker,
// } = reactify.module(ymaps3)
// const YMap = reactify.entity(_YMap)
// const YMapComponentsProvider = reactify.entity(_YMapComponentsProvider)
// const YMapDefaultSchemeLayer = reactify.entity(_YMapDefaultSchemeLayer)
// const YMapDefaultFeaturesLayer = reactify.entity(_YMapDefaultFeaturesLayer)
// const YMapDefaultMarker = reactify.entity(_YMapDefaultMarker)


export type YandexMapProps = {
  point0: MapPointType
  point1: MapPointType
  hidePoints?: boolean
}


// const useYandexMapComponents = () => {
//   const load = async () => {
//   }

//   useEffect(() => {load()}, [])
// }

const getZoom = (
  point0: MapPointType,
  point1: MapPointType,
) => {
  const distance = Math.sqrt((point0.coords[0] - point1.coords[0]) ** 2 + (point0.coords[1] - point1.coords[1]) ** 2) * 10000
  const distanceZoom = [[15, 16.2], [47, 14.8]]
  const interpolated = distanceZoom[0][1] + (distance - distanceZoom[0][0]) / (distanceZoom[1][0] - distanceZoom[0][0]) * (distanceZoom[1][1] - distanceZoom[0][1])

  return interpolated
}

const YandexMap: FC<YandexMapProps> = ({
  point0,
  point1,
  hidePoints
}) => {
  const center: [number, number] = [
    (point0.coords[0] + point1.coords[0]) / 2,
    (point0.coords[1] + point1.coords[1]) / 2,
  ]

  return (
    <div className='YandexMap__container mb-2'>
      <div className='YandexMap'>
        <YMap
          location={{ center: center, zoom: getZoom(point0, point1) }}
        >
          <YMapDefaultSchemeLayer
            customization={[
              // Делаем прозрачными все геометрии водных объектов.
              {
                tags: {
                  any: ['poi', 'transit']
                },
                // elements: 'geometry',
                stylers: [
                  {
                    opacity: 0
                  }
                ]
              },
              // Меняем цвет подписей для всех POI и узлов сети общественного транспорта.
              // {
              //   tags: {
              //     any: ['poi', 'transit_location']
              //   },
              //   elements: 'label.text.fill',
              //   stylers: [
              //     {
              //       color: '#0000DD'
              //     }
              //   ]
              // }
            ]}
          />
          <YMapDefaultFeaturesLayer />
          {!hidePoints && <>
            <YMapDefaultMarker
              title='Отсюда'
              color='brown'
              coordinates={point0.coords}
            />
            <YMapDefaultMarker
              title='Сюда'
              color='red'
              coordinates={point1.coords}
            />
          </>}
        </YMap>
      </div>
    </div>
  )
}


export default YandexMap
