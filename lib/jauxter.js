const Jauxter = module.exports;
const { AUTH_COOKIE } = require('../auth.config');

const fetch = require('node-fetch');
const encodeObj = obj => Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');

Jauxter.checkOverlap = function(reservation) {
  return jooxterRequest("https://app.jooxter.com/checkoverlap", reservation);
}

Jauxter.saveBooking = function(booking) {
  return jooxterRequest("https://app.jooxter.com/savebooking", booking);
}

Jauxter.isBookingSuccess = function(result) {
    return result ? result.status === 'SUCCESS' : false;
}

function jooxterRequest(url, data) {
  return fetch(url, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-GB,en;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,ja;q=0.5",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": AUTH_COOKIE
    },
    "referrer": `https://app.jooxter.com/bookings?r=${data.resourceId}&y=false`,
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": encodeObj(data),
    "method": "POST",
    "mode": "cors"
  }).then(res => res.json())
}
