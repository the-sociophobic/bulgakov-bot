import Start from '../../pages/Start'
import Disclaimer from '../../pages/Disclaimer'
import Chapter1 from '../../pages/Chapter1'
import Chapter2 from '../../pages/Chapter2'
import Chapter3 from '../../pages/Chapter3'
import Chapter4 from '../../pages/Chapter4'

import Chapter5 from '../../pages/Chapter5'
import Doktor1 from '../../pages/Chapter5/Doktor1'
import Border1 from '../../pages/Chapter5/Border1'
import Career1 from '../../pages/Chapter5/Career1'
import Doktor2White from '../../pages/Chapter5/Doktor2White'
import Doktor2Red from '../../pages/Chapter5/Doktor2Red'
import Border2Tiflis from '../../pages/Chapter5/Border2Tiflis'
import Border2France from '../../pages/Chapter5/Border2France'
import Career2Magazine from '../../pages/Chapter5/Career2Magazine'
import Career2Moscow from '../../pages/Chapter5/Career2Moscow'
import Death from '../../pages/Chapter5/Death'
import Depression from '../../pages/Chapter5/Depression'
import Shot from '../../pages/Chapter5/Shot'
import Writer from '../../pages/Chapter5/Writer'

import Chapter6 from '../../pages/Chapter6'
import Chapter7 from '../../pages/Chapter7'
import Chapter8 from '../../pages/Chapter8'
import Chapter9 from '../../pages/Chapter9'
import Move from '../../pages/Move'
import Credits from '../../pages/Credits'

import { MapPointType } from '../../pages/Map'


export type RouteType = {
  to: string
  title: string
  Comp: any
  exact?: boolean
  point?: MapPointType
}


const routes: RouteType[] = [
  {
    to: '/start',
    title: 'Начало',
    Comp: <Start />,
  },
  {
    to: '/disclaimer',
    title: 'Правила пользования ботом',
    Comp: <Disclaimer />,
  },
  {
    to: '/chapter-1',
    title: 'Сцена I',
    Comp: <Chapter1 />,
    point: {
      address: 'Никитина 22',
      addressShort: 'Музей Пушкина',
      coords: [44.681387, 43.033782]
    }
  },
  {
    to: '/chapter-2',
    title: 'Сцена II',
    Comp: <Chapter2 />,
    point: {
      address: 'Кирова 50',
      addressShort: 'Музей истории Владикавказа',
      coords: [44.682465, 43.034964]
    }
  },
  {
    to: '/chapter-3',
    title: 'Сцена III',
    Comp: <Chapter3 />,
    point: {
      address: 'Кирова 37',
      addressShort: 'Пушкин на волах',
      coords: [44.678251, 43.03487]
    }
  },
  {
    to: '/chapter-4',
    title: 'Сцена IV',
    Comp: <Chapter4 />,
    point: {
      address: 'Маяковского 9',
      addressShort: 'Квартира Булгакова',
      coords: [44.678056, 43.032903]
    }
  },
  {
    to: '/chapter-5',
    title: 'Сцена V',
    Comp: <Chapter5 />,
    point: {
      address: 'Проспект Мира 43',
      addressShort: 'Памятник Булгакову',
      coords: [44.679818, 43.033094]
    }
  },
  {
    to: '/chapter-6',
    title: 'Сцена VI',
    Comp: <Chapter6 />,
    point: {
      address: 'Проспект Мира 34',
      addressShort: 'Библиотека им. Гайто Газданова',
      coords: [44.680658, 43.031674]
    }
  },
  {
    to: '/chapter-7',
    title: 'Сцена VII',
    Comp: <Chapter7 />,
    point: {
      address: 'Площадь Ленина 3',
      addressShort: 'Театр Вахтангова',
      coords: [44.679888, 43.03038]
    }
  },
  {
    to: '/chapter-8',
    title: 'Сцена VIII',
    Comp: <Chapter8 />,
    point: {
      address: 'Улица Ленина 9',
      addressShort: 'Особый отдел Красной армии',
      coords: [44.682961, 43.026762]
    }
  },
  {
    to: '/chapter-9',
    title: 'Сцена IX',
    Comp: <Chapter9 />,
    point: {
      address: 'Бутырина 1',
      addressShort: 'Центральный парк',
      coords: [44.681378, 43.02646]
    }
  },
  {
    to: '/credits',
    title: 'Над спектаклем работали',
    Comp: <Credits />,
  },
  {
    to: '/move',
    title: 'Переход',
    Comp: <Move />,
  },
  {
    to: '/*',
    title: 'Начало',
    Comp: <Start />,
  },
  {
    to: '/chapter-5-1-doktor',
    title: 'Путь врача',
    Comp: <Doktor1 />,
  },
  {
    to: '/chapter-5-1-border',
    title: 'Путь заграницы',
    Comp: <Border1 />,
  },
  {
    to: '/chapter-5-1-career',
    title: 'Путь писателя',
    Comp: <Career1 />,
  },
  {
    to: '/chapter-5-2-doktor-red',
    title: 'Путь врача у Красных',
    Comp: <Doktor2Red />,
  },
  {
    to: '/chapter-5-2-doktor-white',
    title: 'Путь врача у Белых',
    Comp: <Doktor2White />,
  },
  {
    to: '/chapter-5-2-border-tiflis',
    title: 'Жизнь в Тифлисе',
    Comp: <Border2Tiflis />,
  },
  {
    to: '/chapter-5-2-border-france',
    title: 'Жизнь во Франции',
    Comp: <Border2France />,
  },
  {
    to: '/chapter-5-2-career-magazine',
    title: 'Путь писателя',
    Comp: <Career2Magazine />,
  },
  {
    to: '/chapter-5-2-career-moscow',
    title: 'Путь писателя',
    Comp: <Career2Moscow />,
  },
  {
    to: '/death',
    title: 'Смерть',
    Comp: <Death />,
  },
  {
    to: '/depression',
    title: 'Депрессия',
    Comp: <Depression />,
  },
  {
    to: '/shot',
    title: 'Расстрел',
    Comp: <Shot />,
  },
  {
    to: '/writer',
    title: 'Карьера писателя',
    Comp: <Writer />,
  },
]


export default routes

