require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const url = `https://api.telegram.org/bot${token}/setWebhook?url=${process.env.COREZOID_WEBHOOK_URL}`;

const bot = new TelegramBot(token);
bot.setWebHook(`${url}/bot${token}`);

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `charID: ${chatId}`);
});

bot.on("message", (msg) => {
  console.log(msg);

  const chatId = msg.chat.id;
  const text = msg.text;

  if (text !== "/start") {
    bot.sendMessage(chatId, `charID: ${chatId} , text: ${text}`);
  }
});
