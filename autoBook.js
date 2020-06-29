const Jauxter = require('./lib/jauxter');
const clc = require('cli-color');
const success = clc.greenBright;
const fail = clc.redBright;
const { USER_ID, USER_EMAIL, USER_HASH } = require('./authParams');
const BOOK_CONFIG = require('./bookConfig');

function formatDate(date) {
    const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const [{ value: month },,{ value: day },,{ value: year }] = dtf .formatToParts(date);
    return `${day}/${month}/${year}`;
}

function isBusinessDay(date) {
    return date.getDay() > 0 && date.getDay() <= 5;
}

// book for the next days (up to 7)
console.log('[Jauxter Started]\nScript will book this desk for the next 7 days (Mon-Fri)...');
(async () => {
    let day = new Date();
    for (let i=0;i<=8;i++) {
        
        // only book between mondays and fridays
        if (isBusinessDay(day)) {
            let dayStr = formatDate(day);
            let bookResult = await Jauxter.saveBooking({
                ...BOOK_CONFIG,
                userId: USER_ID,
                invitedPeople: USER_EMAIL,
                userHash: USER_HASH,
                dateFrom: dayStr,
                dateTo: dayStr,
                api: true,
                version: 2
            });
            let bookDone = Jauxter.isBookingSuccess(bookResult);
            console.log(bookDone ? success('[ ✔ ]') : fail('[ ✗ ]'), dayStr, !bookDone ? bookResult.label : '');
        }

        // go to next day
        day.setDate(day.getDate() + 1)
        day.setHours(0, 0, 0);
    }
})();