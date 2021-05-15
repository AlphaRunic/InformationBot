"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var bot_ts_1 = require("bot-ts");
var path = __importStar(require("path"));
require("dotenv").config();
var client = new bot_ts_1.Client({
    commandPrefix: "::",
    ownerId: "415233686758359051"
});
client.on("ready", function () { return console.log("Ripple is now online."); });
client.on("error", function (err) { return console.warn(err); });
client.onInvalidCommand(function (msg) {
    msg.reply("Invalid commmand \"" + msg.content + "\".");
});
client.registerDefaultCommands();
client.registerCommandsIn(path.join(__dirname, "Commands")).catch(console.error);
client.login(process.env.LOGIN_TOKEN).catch(console.error);
