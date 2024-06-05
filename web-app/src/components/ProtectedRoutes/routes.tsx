import Login from '../../pages/Login'
import Chapter0 from '../../pages/Chapter0'
import Chapter1 from '../../pages/Chapter1'
import Chapter2 from '../../pages/Chapter2'
import Chapter3 from '../../pages/Chapter3'
import Chapter4 from '../../pages/Chapter4'
import Chapter5 from '../../pages/Chapter5'
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
    to: '/chapter-0',
    title: 'Увертюра',
    Comp: <Chapter0 />,
    point: {
      address: 'Никитина 22',
      addressShort: 'Музей Пушкина',
      coords: [44.681387, 43.033782]
    }
  },
  {
    to: '/chapter-1',
    title: 'Глава I',
    Comp: <Chapter1 />,
    point: {
      address: 'Никитина 22',
      addressShort: 'Музей Пушкина',
      coords: [44.681387, 43.033782]
    }
  },
  {
    to: '/chapter-2',
    title: 'Глава II',
    Comp: <Chapter2 />,
    point: {
      address: 'Кирова 50',
      addressShort: 'Музей истории Владикавказа',
      coords: [44.682465, 43.034964]
    }
  },
  {
    to: '/chapter-3',
    title: 'Глава III',
    Comp: <Chapter3 />,
    point: {
      address: 'Кирова 37',
      addressShort: 'Пушкин на волах',
      coords: [44.678251, 43.03487]
    }
  },
  {
    to: '/chapter-4',
    title: 'Глава IV',
    Comp: <Chapter4 />,
    point: {
      address: 'Маяковского 9',
      addressShort: 'Квартира Булгакова',
      coords: [44.678056, 43.032903]
    }
  },
  {
    to: '/chapter-5',
    title: 'Глава V',
    Comp: <Chapter5 />,
    point: {
      address: 'Проспект Мира 43',
      addressShort: 'Памятник Булгакову',
      coords: [44.679818, 43.033094]
    }
  },
  {
    to: '/chapter-6',
    title: 'Глава VI',
    Comp: <Chapter6 />,
    point: {
      address: 'Проспект Мира 34',
      addressShort: 'Библиотека им. Гайто Газданова',
      coords: [44.680658, 43.031674]
    }
  },
  {
    to: '/chapter-7',
    title: 'Глава VII',
    Comp: <Chapter7 />,
    point: {
      address: 'Площадь Ленина 3',
      addressShort: 'Театр Вахтангова',
      coords: [44.679888, 43.03038]
    }
  },
  {
    to: '/chapter-8',
    title: 'Глава VIII',
    Comp: <Chapter8 />,
    point: {
      address: 'Улица Ленина 9',
      addressShort: 'Особый отдел Красной армии',
      coords: [43.026762, 44.682961]
    }
  },
  {
    to: '/chapter-9',
    title: 'Глава IX',
    Comp: <Chapter9 />,
    point: {
      address: 'Бутырина 1',
      addressShort: 'Центральный парк',
      coords: [43.02646, 44.681378]
    }
  },
  {
    to: '/credits',
    title: 'Титры',
    Comp: <Credits />,
  },
  {
    to: '/move',
    title: 'Переход',
    Comp: <Move />,
  },
  {
    to: '/login',
    title: 'Проверка билета',
    Comp: <Login />,
  },
  {
    to: '/login',
    title: 'Проверка билета',
    Comp: <Login />,
  },
]


export default routes
