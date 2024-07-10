import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import Layout from '../components/Layout'


const Credits: FC = () => {
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
      Спектакль сделан Музеем Пушкина<br />
      Продюсер: Алина Шклярская<br />
      Режиссёр: Максим Карнаухов<br />
      Разработчик: Лев Васильев<br />
      Звуковик: Тони<br />
      Художница: Люсиль<br />
    </Layout>
  )
}


export default Credits
