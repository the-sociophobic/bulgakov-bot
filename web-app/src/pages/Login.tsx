import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import Layout from '../components/Layout'


const Login: FC = () => {
  const { title } = routes[12]

  return (
    <Layout
      title={title}
      description={title}
      navigations={[{
        title: 'Проверить',
        to: '/chapter-0',
        // disabled: audioState !== 'ended',
      }]}
    >
      ...
    </Layout>
  )
}


export default Login
