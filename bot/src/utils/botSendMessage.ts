import axios from 'axios'

import fixStringForMarkdownV2 from './fixStringForMarkdownV2'


const { BOT_TOKEN } = process.env


const botSendMessage = async (props: { chat_id: number, text: string }) => {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
  const { chat_id, text } = props
  
  try {
    const messageForUser = {
      chat_id,
      text: fixStringForMarkdownV2(`${text}`),
      parse_mode: 'MarkdownV2',
    }

    await axios.post(url, messageForUser)
  } catch (err) {
    console.log(err)
  }
}


export default botSendMessage
