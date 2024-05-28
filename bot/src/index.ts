import 'dotenv/config'

import { initBot, initBotRoutes } from './bot'
import { init_API_routes } from './API'


(async function init() {
  initBot(process.env.BOT_TOKEN)
  initBotRoutes()
  init_API_routes()
})()
