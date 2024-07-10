import React, { useMemo } from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import useStore from '../../hooks/useStore'
import Loader from '../Loader'
import routes, { RouteType } from './routes'
import useUser from '../../hooks/useUser'
import Start from '../../pages/Start'


const mapRoutes = (routes: RouteType[]) =>
  routes.map(route => ({
    key: route.to,
    path: route.to,
    element: route.Comp    ,
    errorElement: <Start />
  }))

const ProtectedRoutes: React.FC = () => {
  const { data: user, isLoading: loadingUser } = useUser()

  const router = useMemo(
    () => createHashRouter(mapRoutes(routes))
    , []
  )

  useStore.setState({ user })

  if (loadingUser)
    return <Loader />

  return <RouterProvider router={router} />
}


export default ProtectedRoutes
