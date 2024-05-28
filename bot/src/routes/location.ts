import { bot } from '../bot'


const registerLocation = () => {
  bot.on('location', async ({ message }) => {
    const { location } = message

    console.log(location)
  })

  bot.on('edited_message', (ctx) => {
    const { location } = ctx.editedMessage as any

    console.log(location)
  })
}


export default registerLocation
