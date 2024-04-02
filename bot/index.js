import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotenv.config();
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, async (msg, match) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId, 'check the button', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'button', web_app: { url : 'https://ya.ru' }}]
            ]
        }
    });
});
