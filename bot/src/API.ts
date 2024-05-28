import express, { Request, Responce } from 'express'
import axios from 'axios'
import cors from 'cors'

import fixStringForMarkdownV2 from './utils/fixStringForMarkdownV2'
import botSendMessage from './utils/botSendMessage'


const app = express()
app.use(cors())
app.use(express.json())

const { API_PORT, BOT_TOKEN } = process.env


export type TestRouteQueryType = { user: string }

app.get('/test', async (request: Request<{}, {}, {}, TestRouteQueryType>, response: Responce) => {
  const { user } = request.query

  await botSendMessage({
    chat_id: user.id,
    text: `текст`
  })

  response.send([])
})


const init_API_routes = () => {
  app.listen(API_PORT, () => console.log(`Running on port ${API_PORT}`))
}


export {
  init_API_routes
}
