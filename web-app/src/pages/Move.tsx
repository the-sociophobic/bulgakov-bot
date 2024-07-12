import { FC } from 'react'

// import routes from '../components/ProtectedRoutes/routes'
import usePlayer from '../hooks/usePlayer'
import Layout from '../components/Layout'
// import Map from './Map'
import Chapter3Avatar from '../components/Chapter3Avatar'
import ImgFramed from '../components/ImgFramed'
import useParams from '../hooks/useParams'

import move2 from '../assets/images/move/2.jpg'
import move3 from '../assets/images/move/3.jpg'
import move4 from '../assets/images/move/4.jpg'
import move5 from '../assets/images/move/5.jpg'
import move6 from '../assets/images/move/6.jpg'
import move7 from '../assets/images/move/7.jpg'
import move8 from '../assets/images/move/8.jpg'
import move9 from '../assets/images/move/9.jpg'


const Move: FC = () => {
  const { chapter } = useParams()
  const chapterNumber = parseInt(chapter || '0')
  // const point0 = routes[chapterNumber + 1].point!
  // const point1 = routes[chapterNumber + 2].point!
  const { Player, audioState } = usePlayer(`${chapterNumber}.mp3`)
  const { text, img } = dictionary[chapterNumber - 1]
  const showBulgakov = [3, 4, 5, 6, 7, 8].includes(chapterNumber)

  return (
    <Layout
      // title={`${point0.addressShort} → ${point1.addressShort}`}
      title={`Переход`}
      // description={`${point0.address} → ${point1.address}`}
      description={text}
      navigations={[{
        title: audioState === 'ended' ? 'Я на месте' : 'Пропустить аудио',
        to: `/chapter-${chapterNumber + 1}`,
        disabled: false
      }]}
    >
      {Player}
      {showBulgakov &&
        <Chapter3Avatar containerClassName='Move__Avatar__container'/>
      }
      <ImgFramed
        src={img}
        className='mx-auto my-2'
        width={300}
        height={180}
      />
      {/* <Map {...{ point0, point1 }} /> */}
    </Layout>
  )
}


const dictionary = [
  {
    text: 'Идите до Музея истории Владикавказа улица Революции, 61',
    img: move2,
  },
  {
    text: 'Идите до скульптуры Владимира Соскиева «Пушкин на Кавказе» улица Миллера, 26',
    img: move3,
  },
  {
    text: 'Идите до дома Булгакова улица Маяковского, 9',
    img: move4,
  },
  {
    text: 'Идите до памятника скульптора Станислава Тавасиева М.А. Булгакову проспект Мира, 46',
    img: move5,
  },
  {
    text: 'Идите до библиотеки им. Гайто Газданова, проспект Мира, 34',
    img: move6,
  },
  {
    text: 'Идите до Академического русского театра имени Е. Б. Вахтангова» площадь Ленина, 3',
    img: move7,
  },
  {
    text: 'Идите до Министерства образования РСО-Алания улица Ленина, 7',
    img: move8,
  },
  {
    text: 'Идите до входа в Парк Культуры и Отдыха им. К.Л. Хетагурова» проспект Мира, 7',
    img: move9,
  },
]

export default Move
