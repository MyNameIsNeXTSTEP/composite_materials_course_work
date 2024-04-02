// @purpose: Send inline button for invitation guidence
//
// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     const opts = {
//         reply_markup: {
//             inline_keyboard: [
//                 [{
//                     text: 'Invite Bot to Chat',
//                     callback_data: 'invite_bot'
//                 }]
//             ]
//         }
//     };
//     bot.sendMessage(chatId, 'Do you want to invite the bot to a chat?', opts);
// });
// 
// bot.on('callback_query', (callbackQuery) => {
//     const message = callbackQuery.message;
//     const chatId = message.chat.id;

//     if (callbackQuery.data === 'invite_bot') {
//         const response = 'To invite the bot to a group or a channel, you can add the bot directly by searching for the bot\'s username in Telegram. Alternatively, use the invite link: [Invite Link]';
//         bot.sendMessage(chatId, response, {parse_mode: 'Markdown'});
//     }
// });