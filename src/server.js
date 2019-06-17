const { promisify } = require('util');
const { HttpServer } = require('http-server');
const { root, port } = require('./config');

async function startServer() {
    const server = new HttpServer({ root });
    const listen = promisify(server.listen).bind(server);
    await listen(port)
    return server;
}

module.exports = { startServer }
