require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { getBookies, getReference } = require("./api");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  const prefix = "!";

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  switch (command) {
    case "pola":
      const reference = getReference();
      reference
        .then((r) => message.reply(r))
        .catch((e) => message.reply("Terjadi Kesalahan"));
      break;

    case "fafa":
      message.reply("Gacor poll");
      break;

    case "bandar":
      const bookies = getBookies();
      bookies
        .then((b) => message.reply(b))
        .catch((e) => message.reply("Terjadi Kesalahan"));

    default:
      break;
  }
});

client.login(process.env.TOKEN);
