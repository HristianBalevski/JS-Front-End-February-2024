function loggerBuilder(date) {
    return function (text) {
        console.log(`${date}: ${text}`)
    };
}

const logger = loggerBuilder('05.03.2024');
const yesterdayLogger = loggerBuilder('04.03.2024')

logger('Hello Peter');
logger('Hello Ivan');
logger('Hello Georgi');
yesterdayLogger('Hello Peter');
