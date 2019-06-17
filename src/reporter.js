
function consoleReporter (results) {
    console.log('Title | Total | Load | Render')
    console.log('---   | ---   | ---  | ---')
    for (const {title, performanceTiming} of results) {
        const {
            fetchStart,
            domLoading,
            domContentLoadedEventStart,
            loadEventEnd
        } = performanceTiming;

        process.stdout.write(title);
        process.stdout.write(' | ');
        process.stdout.write(String(loadEventEnd - fetchStart));
        process.stdout.write(' | ');
        process.stdout.write(String(loadEventEnd - domLoading));
        process.stdout.write(' | ');
        process.stdout.write(String(domContentLoadedEventStart - domLoading));
        process.stdout.write('\n');
    }

    console.log('')
    console.log('* Total: fetchStart -> loadEventEnd')
    console.log('* Load: domLoading -> loadEventEnd')
    console.log('* Render: domLoading -> domContentLoadedEventStart')
}

module.exports = { consoleReporter };
