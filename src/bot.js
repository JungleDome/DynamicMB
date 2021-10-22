import Mineflayer from 'mineflayer';
import Util from './utilities/util.js';
import Config from './utilities/config.js';

let botInstances = [];

const CreateBot = function () {
    for (let bot in Config.bots) {
        let botInstance = Util.CreateBot(Mineflayer, Config.server.serverHost, Config.server.serverPort, bot.username, bot.password);
        botInstances.push(botInstance);
    }

    return botInstances;
}

export default {
    CreateBot: CreateBot,
    _instances: botInstances,
}