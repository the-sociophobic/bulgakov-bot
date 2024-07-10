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
      Виртуальный спектакль создан в рамках проекта «Искусство жить дома» Государственного музея изобразительных искусств имени А.С. Пушкина,  посвященного исследованию мемориальных пространств — квартир, усадеб, домов, городских улиц — с помощью языка современного искусства.<br />
      
      Продюсер: Алина Шклярская<br />
      Режиссёр: Максим Карнаухов<br />
      Разработчик: Лев Васильев<br />
      Звуковик: Тони<br />
      Художница: Люсиль<br />
    </Layout>
  )
}


export default Credits
