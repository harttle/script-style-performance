const { resolve } = require('path');

const port = process.env.PORT || 8080;
const root = resolve(__dirname, '../cases');

module.exports = {root, port}
