"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const discord_js_1 = require("discord.js");
class Ehyan {
    _bot;
    _token;
    constructor(token) {
        if (!token)
            throw new Error('Invaild Token');
        this._token = token;
        this._bot = new discord_js_1.Client({
            intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
        });
    }
    start() {
        console.log('hello world');
        this._readyHandler();
        this._messageHandler();
        this._bot.login(this._token);
    }
    _readyHandler() {
        this._bot.on('ready', () => console.log('ready'));
    }
    _messageHandler() {
        this._bot.on('messageCreate', (msg) => {
            if (msg.author.id === this._bot.user?.id)
                return;
            console.log(msg);
            if (!msg.content.match('ええやん'))
                return;
            msg.channel.send('ええやんいただきましたっ！\nn日ぶりn回目');
        });
    }
}
const ehyan = new Ehyan(process.env.DISCORD_TOKEN);
ehyan.start();
