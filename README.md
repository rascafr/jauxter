# Jauxter

Jooxter booking automation made simpler (up to 7 days in the future).

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

## Booking config

Create the `bookConfig.js` file, or copy and edit the `autoBook.template.js` file.

```js
module.exports = {
    title: 'Jauxter booking example',
    color: '#eb1354',
    timeFrom: '09:30',
    timeTo: '20:00',
    resourceId: 12345,
    externalInvitedPeople: '',
    description: ''
}
```

## Run it

```bash
npm start
```

If everything went ok, you should see something like:

```
[Jauxter Started]
Script will book this desk for the next 7 days (Mon-Fri)...
[ ✔ ] 02/07/2020
[ ✔ ] 03/07/2020
[ ✔ ] 06/07/2020
[ ✗ ] 07/07/2020 ...
```