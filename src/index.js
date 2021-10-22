import WebServer from './webServer.js';
import Bot from './bot/bot.js';
import BotViewer from './bot/botViewer';


// WebServer.Main(3000);
var bot = Bot.CreateBots()[0];

BotViewer.CreateViewer(bot, 3001);
BotViewer._DebugPathFinder(bot);