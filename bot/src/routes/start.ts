import printUsername from '../utils/printUsername'
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

      await ctx.reply(`Здравствуйте, ${printUsername(ctx.from)}. Приветствуем вас на аудиоспектакле Лихорадка  по мотивам`,
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
