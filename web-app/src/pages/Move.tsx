import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import usePlayer from '../hooks/usePlayer'
import Layout from '../components/Layout'
import Map from '../components/Map'
import Chapter3Avatar from '../components/Chapter3Avatar'
import Chapter8Avatar from '../components/Chapter8Avatar'
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

import map1 from '../assets/images/move/maps/1.png'
import map2 from '../assets/images/move/maps/2.png'
import map3 from '../assets/images/move/maps/3.png'
import map4 from '../assets/images/move/maps/4.png'
import map5 from '../assets/images/move/maps/5.png'
import map6 from '../assets/images/move/maps/6.png'
import map7 from '../assets/images/move/maps/7.png'
import map8 from '../assets/images/move/maps/8.png'

import routeImg1 from '../assets/images/move/routes/1.png'
import routeImg2 from '../assets/images/move/routes/2.png'
import routeImg3 from '../assets/images/move/routes/3.png'
import routeImg4 from '../assets/images/move/routes/4.png'
import routeImg5 from '../assets/images/move/routes/5.png'
import routeImg6 from '../assets/images/move/routes/6.png'
import routeImg7 from '../assets/images/move/routes/7.png'
import routeImg8 from '../assets/images/move/routes/8.png'


const Move: FC = () => {
  const { chapter } = useParams()
  const chapterNumber = parseInt(chapter || '0')
  const point0 = routes[chapterNumber + 1].point!
  const point1 = routes[chapterNumber + 2].point!
  const { Player, audioState } = usePlayer(`${chapterNumber}.mp3`)
  const { text, img, map, routeImg } = dictionary[chapterNumber - 1]
  const showBulgakov3 = [3, 4, 5, 6, 7].includes(chapterNumber)
  const showBulgakov8 = [8].includes(chapterNumber)

  return (
    <Layout
      // title={`${point0.addressShort} → ${point1.addressShort}`}
      title={`Переход`}
      // description={`${point0.address} → ${point1.address}`}
      description={''}
      navigations={[{
        title: audioState === 'ended' ? 'Я на месте' : 'Пропустить аудио',
        to: `/chapter-${chapterNumber + 1}`,
        disabled: false
      }]}
    >
      {Player}
      <div>
        {text}
      </div>
      {showBulgakov3 &&
        <Chapter3Avatar containerClassName='Move__Avatar__container'/>
      }
      {showBulgakov8 &&
        <Chapter8Avatar containerClassName='Move__Avatar__container'/>
      }
      <Map
        {...{ point0, point1 }}
        mapImg={map}
        routeImg={routeImg}
      />
      {/* <ImgFramed
        src={map}
        className='mx-auto my-2'
        width={300}
        height={180}
      /> */}
      <ImgFramed
        src={img}
        className='mx-auto my-2'
        width={300}
        height={180}
      />
    </Layout>
  )
}


const dictionary = [
  {
    text: <>Идите до Музея истории Владикавказа<br />
    улица Революции, 61
    <br />
    Следуйте направо до ул. Революции, затем - поверните налево и следуйте до конца квартала
    </>,
    img: move2,
    map: map1,
    routeImg: routeImg1,
  },
  {
    text: <>Идите до скульптуры Владимира Соскиева «Пушкин на Кавказе»<br />
    улица Миллера, 26<br />
    Поверните направо, следуйте до конца квартала, поверните налево, следуйте по улице Кирова, до ближайшего перехода, перейдите на противоположную сторону, следуйте в заданном направлении до памятника
    </>,
    img: move3,
    map: map2,
    routeImg: routeImg2,
  },
  {
    text: <>Идите до дома Булгакова<br />
    улица Маяковского, 9<br />
    На светофоре поверните налево, следуйте через перекресток по ул. Миллера до ул.Маяковского, затем- поверните направо, следуйте до конца квартала
    </>,
    img: move4,
    map: map3,
    routeImg: routeImg3,
  },
  {
    text: <>Идите до памятника скульптора Станислава Тавасиева М.А. Булгакову<br />
    проспект Мира, 46<br />
    Развернитесь, следуйте в обратном направлении до ул. Миллера, далее - не сворачивая, до памятника М. Булгакову
    </>,
    img: move5,
    map: map4,
    routeImg: routeImg4,
  },
  {
    text: <>Идите до библиотеки им. Гайто Газданова,<br />
    проспект Мира, 34<br />
    Поверните направо, следуйте до ближайшего перекрестка, перейдите на противоположную сторону прос. Мира, следуйте до библиот
    </>,
    img: move6,
    map: map5,
    routeImg: routeImg5,
  },
  {
    text: <>Идите до Академического русского театра имени Е. Б. Вахтангова»<br />
    площадь Ленина, 3<br />
    Следуйте до площади Ленина
    </>,
    img: move7,
    map: map6,
    routeImg: routeImg6,
  },
  {
    text: <>Идите до Министерства образования РСО-Алания<br />
    улица Ленина, 7<br />
    От площади Ленина направляйтесь по улице Куйбышева (театр за спиной), затем поверните направо на улицу Ленина и следуйте до пересечения ее с улицей Бутырина
    </>,
    img: move8,
    map: map7,
    routeImg: routeImg7,
  },
  {
    text: <>Идите до входа в Парк Культуры и Отдыха им. К.Л. Хетагурова»<br />
    проспект Мира, 7<br />
    Поверните направо, следуйте по улице Бутырина до Центрального парка. Войдите в парк, поверните налево, следуйте до выхода на площадь Свободы.
    </>,
    img: move9,
    map: map8,
    routeImg: routeImg8,
  },
]

export default Move
