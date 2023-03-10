require("dotenv").config();

const { SlashCommendBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");

const commands = [
  new SlashCommendBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
].map((commands) => commands.toJSON());

const rest = new REST({ version: "10" }).setToken("");

rest
  .put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID,
      process.env.GUILD_ID
    ),
    { body: commands }
  )
  .then(() => console.log("successfully"))
  .catch((e) => console.log(e));
