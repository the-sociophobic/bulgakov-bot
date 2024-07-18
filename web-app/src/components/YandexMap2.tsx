// import React, { FC, useEffect } from 'react'
// import ReactDOM from 'react-dom/client'
import { FC, useEffect } from 'react'

import { MapPointType } from '../pages/Map'


export type YandexMapProps = {
  point0: MapPointType
  point1: MapPointType
}


// const useYandexMapComponents = () => {
//   const load = async () => {
//   }

//   useEffect(() => {load()}, [])
// }

// const getZoom = (
//   point0: MapPointType,
//   point1: MapPointType
// ) => {
//   console.log(window.ymaps3)
//   const distance = Math.sqrt((point0.coords[0] - point1.coords[0]) ** 2 + (point0.coords[1] - point1.coords[1]) ** 2) * 10000
//   const distanceZoom = [[15, 16.2], [47, 14.8]]
//   const interpolated = distanceZoom[0][1] + (distance - distanceZoom[0][0]) / (distanceZoom[1][0] - distanceZoom[0][0]) * (distanceZoom[1][1] - distanceZoom[0][1])

//   return interpolated
// }

const YandexMap: FC<YandexMapProps> = ({
  point0,
  point1,
}) => {
  const center: [number, number] = [
    (point0.coords[0] + point1.coords[0]) / 2,
    (point0.coords[1] + point1.coords[1]) / 2,
  ]
  console.log(center)
  // const zoom = getZoom(point0, point1)

  useEffect(() => {
    const { ymaps } = window
    const init = () => {
      // var geolocation = ymaps.geolocation,
      //   myMap = new ymaps.Map('map', {
      //     center,
      //     zoom
      //   }, {
      //     // searchControlProvider: 'yandex#search'
      //   });

      // Сравним положение, вычисленное по ip пользователя и
      // положение, вычисленное средствами браузера.
      // geolocation.get({
      //   provider: 'yandex',
      //   mapStateAutoApply: true
      // }).then(function (result: any) {
      //   // Красным цветом пометим положение, вычисленное через ip.
      //   result.geoObjects.options.set('preset', 'islands#redCircleIcon');
      //   result.geoObjects.get(0).properties.set({
      //     balloonContentBody: 'Мое местоположение'
      //   });
      //   myMap.geoObjects.add(result.geoObjects);
      // });

      // var placemark = new ymaps.Placemark(center, { iconContent: "Сюда" }
      //   , {
      //     preset: "islands#redCircleIcon",
      //     // Отключаем кнопку закрытия балуна.
      //     // balloonCloseButton: false,
      //     //  // Балун будем открывать и закрывать кликом по иконке метки.
      //     // hideIconOnBalloonOpen: false
      //   });
      // myMap.geoObjects.add(placemark)

      // geolocation.get({
      //   provider: 'browser',
      //   mapStateAutoApply: true
      // }).then(function (result: any) {
      //   // Синим цветом пометим положение, полученное через браузер.
      //   // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
      //   result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
      //   myMap.geoObjects.add(result.geoObjects);


      // });

    //   ymaps.route([point0.coords, point1.coords], {
    //     multiRoute: true
    // }).done(function (route: any) {
    //     route.options.set("mapStateAutoApply", true);
    //     myMap.geoObjects.add(route);
    // }, function (err: any) {
    //     throw err;
    // }, this);
  }

    ymaps.ready(init)

  }, [])

  return (
    <div className='YandexMap__container mb-2'>
      <div className='YandexMap' id='map'>

      </div>
    </div>
  )
}


export default YandexMap
