import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import Layout from '../components/Layout'
import LinkWrapper from '../components/LinkWrapper'
import Chapter8Avatar from '../components/Chapter8Avatar'


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
      куратор проекта «Искусство жить дома»: Дарья Болдырева<br />
      руководитель проекта: Галина Тебиева<br />
      научный консультант: Елена Габоева<br />
      координатор: Лилия Галазова<br />
      фотограф: Евгений Иванов
      <br /><br />
      режиссер: Максим Карнаухов<br />
      драматург:  Алина Шклярская<br />
      разработчик: <LinkWrapper className='text-black' to='https://леф.рф'>Леф Васильев</LinkWrapper>
      художник: Ольга Шабатура<br />
      саунд-дизайн: Антон Шанихин<br />
      <br /><br />
      актеры: Ниёле Мейруле, Дмитрий Бутеев, Владимир Лесных, Надежда Некрасова<br /><br />
      <Chapter8Avatar containerClassName='Credits__Avatar__container' />
    </Layout>
  )
}


export default Credits
