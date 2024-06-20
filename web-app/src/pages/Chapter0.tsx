import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import usePlayer from '../hooks/usePlayer'
import Layout from '../components/Layout'


const Chapter0: FC = () => {
  const { title } = routes[0]
  const {
    Player,
    // audioState
  } = usePlayer('0.mp3')

  return (
    <Layout
      title={title}
      description=''
      navigations={[{
        title: 'Продолжить',
        to: '/chapter-1',
        // disabled: audioState !== 'ended',
      }]}
    >
      {Player}
    </Layout>
  )
}


export default Chapter0
