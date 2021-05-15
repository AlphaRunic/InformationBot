import Discord from "discord.js";
import { BotConfig as bot } from "./BotConfig";
require("dotenv").config();

const client = new Discord.Client({
    fetchAllMembers: true
});

client.on("ready", () => console.log(`${bot.name} ${bot.version} is now online.`));
client.on("error", (err) => console.warn(err));

client.login(process.env.LOGIN_TOKEN).catch(console.error);