import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotenv.config();
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  console.log(chatId, resp)
  bot.sendMessage(chatId, resp);
});

// bot.on('message', (msg) => {
//   if (msg.text === '/start') {
//     console.log(1);
//   }
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Received your message');
// });