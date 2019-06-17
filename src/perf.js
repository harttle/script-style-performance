const { port } = require('./config');
const puppeteer = require('puppeteer');
const count = 100;

async function runPerf(file) {
    const url = `http://localhost:${port}/${file}`
    const performanceTimings = []
    let title = 'Untitiled'

    for (let i = 0; i < count; i++) {
        console.log(`progress: ${i}/${count}`);
        const browser = await puppeteer.launch({args: ['--no-sandbox']});
        const page = await browser.newPage();
        await page.goto(url);

        title = await page.title()
        performanceTimings.push(JSON.parse(
            await page.evaluate(() => JSON.stringify(window.performance.timing))
        ));
        await browser.close();
    }
    return { title, performanceTiming: average(performanceTimings) }
}

function average(arr) {
    const obj = {}
    for (const item of arr) {
        for (let key of Object.keys(item)) {
            if (!obj[key]) obj[key] = 0
            obj[key] += item[key]
        }
    }
    return obj
}

module.exports = { runPerf }
