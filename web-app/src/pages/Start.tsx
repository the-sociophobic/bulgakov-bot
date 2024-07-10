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
      Совсем скоро вам предстоит перенестись почти на сто лет назад во Владикавказ, чтобы узнать историю превращения нашего героя – Михаила Булгакова – из военного врача, служившего на стороне белых в армии Деникина, в писателя, драматурга, создателя первого советского театра в городе.<br />
      Пережив во «владикавказский период» голод, тиф, череду лишений, Булгаков уезжает в Москву совсем другим человеком.
    </Layout>
  )
}


export default Start
