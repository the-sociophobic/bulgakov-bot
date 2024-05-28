import { Telegraf } from 'telegraf'

import registerStart from './routes/start'
import registerLocation from './routes/location'
import registerDev from './routes/dev'


let bot: null | Telegraf = null


const initBotRoutes = () => {
  registerStart()
  registerLocation()
  registerDev()

  bot.launch()
  console.log(`[${process.env.BOT_NAME}] All routes set`)
}

function initBot(token: string, options?: object) {
  bot = new Telegraf(token)
  return bot
}


export { bot, initBot, initBotRoutes }
