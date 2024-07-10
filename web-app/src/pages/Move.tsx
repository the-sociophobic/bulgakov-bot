import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import usePlayer from '../hooks/usePlayer'
import Layout from '../components/Layout'
import Map from './Map'
import useParams from '../hooks/useParams'


const Move: FC = () => {
  const { chapter } = useParams()
  const chapterNumber = parseInt(chapter || '0')
  const point0 = routes[chapterNumber + 1].point!
  const point1 = routes[chapterNumber + 2].point!
  const { Player, audioState } = usePlayer(`${chapterNumber}.mp3`)

  return (
    <Layout
      title={`${point0.addressShort} → ${point1.addressShort}`}
      description={`${point0.address} → ${point1.address}`}
      navigations={[{
        title: audioState === 'ended' ? 'Я на месте' : 'Пропустить аудио',
        to: `/chapter-${chapterNumber + 1}`,
        disabled: false
      }]}
    >
      <Map {...{ point0, point1 }} />
      {Player}
    </Layout>
  )
}


export default Move
