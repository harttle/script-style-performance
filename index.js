#!/usr/bin/env node

const { startServer } = require('./src/server');
const { consoleReporter } = require('./src/reporter');
const { root } = require('./src/config');
const { runPerf } = require('./src/perf')
const { readdirSync } = require('fs');

async function main() {
    const server = await startServer();
    const results = []
    const files = readdirSync(root).filter(x => /\.html$/.test(x))
    for (const file of files) {
        results.push(await runPerf(file));
    }
    server.close()
    consoleReporter(results)
}


main()
