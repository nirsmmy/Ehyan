import dotenv from 'dotenv';
dotenv.config();

import { Client, Intents, Message } from 'discord.js';

class Ehyan {
  private _bot: Client;
  private _token: string;

  constructor(token?: string) {
    if (!token) throw new Error('Invaild Token');

    this._token = token;
    this._bot = new Client({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    });
  }

  public start(): void {
    console.log('hello world');
    this._readyHandler();
    this._messageHandler();

    this._bot.login(this._token);
  }

  private _readyHandler(): void {
    this._bot.on('ready', () => console.log('ready'));
  }

  private _messageHandler(): void {
    this._bot.on('messageCreate', (msg: Message) => {
      if (msg.author.id === this._bot.user?.id) return;
      console.log(msg);

      if (!msg.content.match('ええやん')) return;

      msg.channel.send('ええやんいただきましたっ！\nn日ぶりn回目');
    });
  }
}

const ehyan = new Ehyan(process.env.DISCORD_TOKEN);
ehyan.start();
