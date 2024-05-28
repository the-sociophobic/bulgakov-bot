import { bot } from '../bot'


const registerDev = () => {
  bot.command('clean', async ctx => {
    ctx.reply('Клавиатура удалена', { reply_markup: { remove_keyboard: true } })
  })
}


export default registerDev
