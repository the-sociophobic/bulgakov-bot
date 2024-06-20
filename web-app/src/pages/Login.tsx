import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import Layout from '../components/Layout'
import useUser from '../hooks/useUser'
import printUsername from '../utils/printUsername'


const Login: FC = () => {
  const { title } = routes[12]
  const { data: user } = useUser()

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
      {user &&
        <>
          Привет, {printUsername(user)} тут проверяется ваш билет. Можешь нажать, «Проверить»
        </>
      }
    </Layout>
  )
}


export default Login
