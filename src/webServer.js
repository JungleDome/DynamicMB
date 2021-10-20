import Express from 'express';

const Main = function(port) {
    if (port == null) throw 'Web server port is needed.';

    const server = Express();
    server.get('/', function (req, res) {
        res.send('Welcome to reloadable mineflayer player.');
    });
    
    
    server.listen(port);
}

export default {
    Main: Main,
}