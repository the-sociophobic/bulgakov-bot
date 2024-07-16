import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import Layout from '../components/Layout'
import LinkWrapper from '../components/LinkWrapper'


const Credits: FC = () => {
  const { title } = routes[11]

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
      куратор проекта «Искусство жить дома»: Дарья Болдырева руководитель проекта: Галина Тебиева<br />
      научный консультант: Елена Габоева<br />
      координатор: Лилия Галазова<br />
      фотограф: Евгений Иванов
      <br /><br />
      режиссер: Максим Карнаухов<br />
      драматург:  Алина Шклярская<br />
      художник: Ольга Шабатура<br />
      саунд -дизайн: Антон Шанихин<br />
      разработчик: <LinkWrapper className='text-black' to='https://леф.рф'>Лев Васильев</LinkWrapper>
      <br /><br />
      актеры: Ниёле Мейруле, Дмитрий Бутеев, Владимир Лесных, Надежда Некрасова  
    </Layout>
  )
}


export default Credits
