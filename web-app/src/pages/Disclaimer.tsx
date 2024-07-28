import { FC } from 'react'

import routes from '../components/ProtectedRoutes/routes'
import Layout from '../components/Layout'


const Disclaimer: FC = () => {
  const { title } = routes[1]

  return (
    <Layout
      title={title}
      description=''
      navigations={[{
        title: 'ПОНЯТНО',
        to: '/chapter-1',
        // disabled: audioState !== 'ended',
      }]}
    >
      Вы находитесь в виртуальном, но, всё-таки, театре. 
      <br /><br />
      Вы можете проходить маршрут, как вам удобно. В нашем театре  нет капельдинеров - никто не сделает вам замечание за то, что вы шумите во время представления или заняли не свое место, но от вашей внимательности зависит степень погружения в историю.
      <br /><br />
      Спектакль состоит из девяти сцен, в которые включены интерактивные элементы, требующие вашего участия. Во время перехода от сцены к сцене/от локации к локации будет звучать аудиозапись.
      <br /><br />
      Не спешите в переходах между локациями: город в нашем спектакле – это декорация, взгляните на него по-новому.
      <br /><br />
      Следуйте именно тем маршрутом, который указан на карте, встроенной в бот. Все, что вы будете видеть на пути, является визуальным дополнением к аудиочасти спектакля. 
      <br /><br />
      - Игнорируйте звонки во время спектакля. Не забывайте –  вы в театре.
      <br /><br />
      - Не отвлекайтесь на переписку, всплывающие окна других чатов, они могут сбить работу бота.
      <br /><br />
      - Следуйте указаниям бота между сценами.
      <br /><br />
      - Если бот закрылся,  не волнуйтесь, вновь откройте его – и спектакль продолжится.
      <br /><br />
      - Осторожно переходите дорогу! 
      <br /><br />
      - Приятной премьеры!
      <br /><br />
    </Layout>
  )
}


export default Disclaimer
