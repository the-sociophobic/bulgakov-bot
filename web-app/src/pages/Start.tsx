import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import Layout from '../components/Layout'
import useUser from '../hooks/useUser'
import printUsername from '../utils/printUsername'


const Start: FC = () => {
  const { title } = routes[0]
  const { data: user } = useUser()

  return (
    <Layout
      title={title}
      description=''
      navigations={[{
        title: 'ВПЕРЕД!',
        to: '/disclaimer',
        // disabled: audioState !== 'ended',
      }]}
    >
      Здравствуйте, {user ? printUsername(user) : ''}<br />
      Приветствуем вас на аудиоспектакле «Лихорадка», по мотивам творчества М.А.Булгакова.
    </Layout>
  )
}


export default Start
