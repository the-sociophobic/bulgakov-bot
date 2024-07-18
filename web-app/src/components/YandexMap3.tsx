import { FC, useEffect } from 'react'

import { MapPointType } from '../pages/Map'


export type YandexMapProps = {
  point0: MapPointType
  point1: MapPointType
}


const getZoom = (
  point0: MapPointType,
  point1: MapPointType
) => {
  const distance = Math.sqrt((point0.coords[0] - point1.coords[0]) ** 2 + (point0.coords[1] - point1.coords[1]) ** 2) * 10000
  const distanceZoom = [[15, 16.2], [47, 14.8]]
  const interpolated = distanceZoom[0][1] + (distance - distanceZoom[0][0]) / (distanceZoom[1][0] - distanceZoom[0][0]) * (distanceZoom[1][1] - distanceZoom[0][1])

  return interpolated
}

// function getPointStr(point: number[]) {
//   return point.map((c: any) => c.toFixed(4)).join('; ');
// }


export type LngLat = number[]

export const lineStyle: any = {
  fillRule: 'nonzero',
  fill: '#333',
  fillOpacity: 0.9,
  stroke: [
    {width: 6, color: '#007afce6'},
    {width: 10, color: '#fff'}
  ]
};

async function fetchRoute(
  startCoordinates: LngLat,
  endCoordinates: LngLat,
  type: any = 'walking'
) {
  const { ymaps3} = window
  // Request a route from the Router API with the specified parameters.
  const routes = await ymaps3.route({
    points: [startCoordinates, endCoordinates], // Start and end points of the route LngLat[]
    type, // Type of the route
    bounds: true, // Flag indicating whether to include route boundaries in the response
    undefined
  });

  // Check if a route was found
  if (!routes[0]) return;

  // Convert the received route to a RouteFeature object.
  const route = routes[0].toRoute();

  // Check if a route has coordinates
  if (route.geometry.coordinates.length == 0) return;

  return route;
}


async function main(
  point0: MapPointType,
  point1: MapPointType,
) {
  const center: [number, number] = [
    (point0.coords[0] + point1.coords[0]) / 2,
    (point0.coords[1] + point1.coords[1]) / 2,
  ]
  const zoom = getZoom(point0, point1)

  const { ymaps3 } = window
  // Waiting for all api elements to be loaded
  await ymaps3.ready;
  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapFeature,
    // YMapControls, YMapControlButton
  } =
    ymaps3;
  const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

  // Initialize the map
  let map = new YMap(
    // Pass the link to the HTMLElement of the container
    document.getElementById('map'),
    // Pass the map initialization parameters
    {location: { center, zoom }, showScaleInCopyrights: true, margin: [100, 100, 100, 100]},
    [
      // Add a map scheme layer
      new YMapDefaultSchemeLayer({}),
      // Add a layer of geo objects to display markers and line
      new YMapDefaultFeaturesLayer({})
    ]
  );

  // Create and add route start and end markers to the map.
  const pointA = new YMapDefaultMarker({
    coordinates: point0.coords,
    // draggable: true,
    title: 'Старт',
    // subtitle: getPointStr(point0.coords),
    // onDragMove: onDragMovePointAHandler,
    // onDragEnd: onDragEndHandler
  });
  const pointB = new YMapDefaultMarker({
    coordinates: point1.coords,
    // draggable: true,
    title: 'Финиш',
    // subtitle: getPointStr(point1.coords),
    // onDragMove: onDragMovePointBHandler,
    // onDragEnd: onDragEndHandler
  });
  map.addChild(pointA).addChild(pointB);

  // Create and add a route line to the map
  const routeLine = new YMapFeature({geometry: {type: 'LineString', coordinates: []}, style: lineStyle});
  map.addChild(routeLine);

  // Get and process data about the initial route
  fetchRoute(pointA.coordinates, pointB.coordinates).then(routeHandler);

  /* Create and add a shared container for controls to the map.
Using YMapControls you can change the position of the control */
  // const topRightControls = new YMapControls({position: 'top right'});
  // map.addChild(topRightControls);
  // // Add a custom information message control to the map
  // topRightControls.addChild(new InfoMessage({text: 'Drag any marker to rebuild the route.'}));

  // const topLeftControls = new YMapControls({position: 'top left'}, [
  //   new YMapControlButton({
  //     text: 'Driving',
  //     onClick: () => fetchRoute(pointA.coordinates, pointB.coordinates, 'driving').then(routeHandler)
  //   }),
  //   new YMapControlButton({
  //     text: 'Truck',
  //     onClick: () => fetchRoute(pointA.coordinates, pointB.coordinates, 'truck').then(routeHandler)
  //   }),
  //   new YMapControlButton({
  //     text: 'Walking',
  //     onClick: () => fetchRoute(pointA.coordinates, pointB.coordinates, 'walking').then(routeHandler)
  //   }),
  //   new YMapControlButton({
  //     text: 'Transit',
  //     onClick: () => fetchRoute(pointA.coordinates, pointB.coordinates, 'transit').then(routeHandler)
  //   })
  // ]);
  // map.addChild(topLeftControls);

  // The handler functions for updating the coordinates and subtitle of the marker when dragging
  // function onDragMovePointAHandler(coordinates: LngLat) {
  //   pointA.update({coordinates, subtitle: getPointStr(coordinates)});
  // }
  // function onDragMovePointBHandler(coordinates: LngLat) {
  //   pointB.update({coordinates, subtitle: getPointStr(coordinates)});
  // }

  // // The handler function for updating route data after dragging the marker
  // function onDragEndHandler() {
  //   fetchRoute(pointA.coordinates, pointB.coordinates).then(routeHandler);
  // }

  /* A handler function that updates the route line 
and shifts the map to the new route boundaries, if they are available. */
  function routeHandler(newRoute: any) {
    // If the route is not found, then we alert a message and clear the route line
    if (!newRoute) {
      alert('Route not found');
      routeLine.update({geometry: {type: 'LineString', coordinates: []}});
      return;
    }

    routeLine.update({...newRoute});
    if (newRoute.properties.bounds) {
      map.setLocation({bounds: newRoute.properties.bounds, duration: 300});
    }
  }
}


const YandexMap: FC<YandexMapProps> = ({
  point0,
  point1,
}) => {
  // const center: [number, number] = [
  //   (point0.coords[0] + point1.coords[0]) / 2,
  //   (point0.coords[1] + point1.coords[1]) / 2,
  // ]
  // const zoom = getZoom(point0, point1)

  useEffect(() => {
    main(
      point0,
      point1,    
    )
  }, [])

  return (
    <div className='YandexMap__container mb-2'>
      <div className='YandexMap' id='map'>

      </div>
    </div>
  )
}


export default YandexMap
