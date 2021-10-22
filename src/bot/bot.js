import Mineflayer from 'mineflayer';
import Util from '../utilities/util.js';
import Config from '../utilities/config.js';

let botInstances = [];

const CreateBots = function () {
    for (let bot in Config.bots) {
        let botInstance = CreateBot(Mineflayer, Config.server, bot);
        botInstances.push(botInstance);
    }

    return botInstances;
}

const CreateBot = function (mineflayer, server, loginDetails) {
    const bot = mineflayer.createBot({
        host: server.host,
        username: loginDetails.username,
        password: loginDetails.password,
        port: server.port,
        version: server.version
    });

    return bot;
}

export default {
    CreateBot: CreateBot,
    CreateBots: CreateBots,
    _instances: botInstances,
}