import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import Layout from '../components/Layout'


const Chapter0: FC = () => {
  const { title } = routes[10]

  return (
    <Layout
      title={title}
      description=''
      navigations={[{
        title: 'Пропустить',
        closeWebApp: true,
        disabled: false,
      }]}
    >
      Спектакль сделан Музеем Пушкина
      Продюсер: Алина Шклярская
      Режиссёр: Максим Карнаухов
      Разработчик: Лев Васильев
      Звуковик: Тони
      Художница: Люсиль
    </Layout>
  )
}


export default Chapter0
