import { bot } from '../bot'


const {
  REACT_APP_URL: appURL,
  BOT_NAME
} = process.env

const registerStart = () =>
  bot.start(async (ctx) => {
    try {
      await ctx.setChatMenuButton({
        type: 'web_app',
        text: 'Пуск',
        web_app: {
          url: `${appURL}/#/`
        }
      })

      await ctx.reply(`Привет! Это интерактивная экскурсия «Один день из жизни недоктора Булгакова» в городе Владикавказ. Чтобы начать, нажмите кнопку:`,
        {
          reply_markup: {
            // keyboard: [
            //   [
            //     {
            //       text: 'Отправить местоположение',
            //       request_location: true
            //     }
            //   ]
            // ],
            inline_keyboard: [
              [
                {
                  text: 'Пуск',
                  web_app: {
                    url: `${appURL}/#/`
                  }
                }
              ]
            ]
          }
        })
    } catch (error) {
      console.log('/start error', error)
    }
  })


export default registerStart
