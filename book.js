const fetch = require('node-fetch');
const encodeObj = obj => Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
const { USER_ID, USER_EMAIL, USER_HASH, AUTH_COOKIE } = require('./authParams');

const reservation = {
  dateFrom: '30/06/2020',
  dateTo: '30/06/2020',
  timeFrom: '09:30',
  timeTo: '20:00',
  userId: USER_ID,
  resourceId: 12171,
  invitedPeople: USER_EMAIL
}

const booking = {
  title: 'Self-desk booking',
  color: '#0500ff', //'#2196F3',
  ...reservation,
  externalInvitedPeople: '',
  description: '',
  api: true,
  userHash: USER_HASH,
  version: 2
}

console.log('Booking for', reservation);

checkOverlap(reservation)
  .then((body) => console.log('reservation', body))
  .then(() => saveBooking(booking))
  .then((body) => console.log('booking', body))

function checkOverlap(reservation) {
  return jooxterRequest("https://app.jooxter.com/checkoverlap", reservation);
}

function saveBooking(booking) {
  return jooxterRequest("https://app.jooxter.com/savebooking", booking);
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
