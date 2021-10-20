import Mineflayer from 'mineflayer';
import Util from './utilities/util.js';
import Config from './utilities/config.js';

const Main = function () {
    var botInstances = [];

    for (let bot in Config.bots) {
        let botInstance = Util.CreateBot(Mineflayer, Config.server.serverHost, Config.server.serverPort, bot.username, bot.password);
        botInstances.push(botInstance);
    }
}

export default {
    Main: Main,
}