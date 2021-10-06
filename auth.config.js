module.exports = {
    USER_ID: parseInt(process.env.USER_ID || "1234", 10),
    USER_EMAIL: process.env.USER_EMAIL || 'xxxxx@deloitte.fr',
    USER_HASH: process.env.USER_HASH || 'ffff',
    AUTH_COOKIE: process.env.AUTH_COOKIE || "AWSELB=ABCD; AWSELBCORS=ABCD; name=value; lang=fr; username=ffff; x-api-key=ffff; JSESSIONID=YYYY"
}