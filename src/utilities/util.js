const CreateBot = function (mineflayer, serverHost, serverPort, username, password) {
    const bot = mineflayer.createBot({
        host: serverHost,
        username: username,
        password: password,
        port: serverPort,
    });

    return bot;
}

export default {
    CreateBot: CreateBot,
}