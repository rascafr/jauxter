# Jauxter

Jooxter booking automation made simpler.

## Install

Clone the repository, install the packages

```bash
cd jauxter
npm i
```

## Authentication config

Create the `authParams.js` file, or copy and edit the `authParams.template.js` file.

```js
module.exports = {
    USER_ID: 1234,
    USER_EMAIL: 'xxxxx@deloitte.fr',
    USER_HASH: 'ffff',
    AUTH_COOKIE: "AWSELB=ABCD; AWSELBCORS=ABCD; name=value; lang=fr; username=ffff; x-api-key=ffff; JSESSIONID=YYYY"
}
```

Those fields values can be guessed when running a request on the jooxter app website with the web inspector.

## Run it

Edit the `book.js` file with your booking / search query (check the `reservation` object) where you can set:

- the desk identifier
- the booking date
- the booking time range

Then:

```bash
npm start
```

If everything went ok, you should see something like:

```
Booking for { dateFrom: '30/06/2020',
  dateTo: '30/06/2020',
  timeFrom: '09:30',
  timeTo: '20:00',
  userId: xxxxx,
  resourceId: 12171,
  invitedPeople: 'xxxxxx@deloitte.fr' }
reservation { status: 'SUCCESS' }
booking { data: { bookingId: [ 1234 ] }, status: 'SUCCESS' }
```