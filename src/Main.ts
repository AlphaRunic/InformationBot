import { Client } from "bot-ts";
import * as path from "path";
require("dotenv").config();

const client = new Client({
    commandPrefix: "::",
    ownerId: "415233686758359051"
});

client.on("ready", () => console.log("Ripple is now online."));
client.on("error", (err) => console.warn(err));
client.onInvalidCommand((msg) => {
    msg.reply(`Invalid commmand "${msg.content}".`);
});

client.registerDefaultCommands();
client.registerCommandsIn(path.join(__dirname, "Commands")).catch(console.error);
client.login(process.env.LOGIN_TOKEN).catch(console.error);