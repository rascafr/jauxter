module.exports = {
    title: process.env.BOOKING_TITLE || 'Self-desk booking',
    color: process.env.BOOKING_COLOR || '#0500ff',
    timeFrom: process.env.BOOKING_TIME_FROM || '09:30',
    timeTo: process.env.BOOKING_TIME_TO || '20:00',
    resourceId: parseInt(process.env.BOOKING_RESOURCE_ID || "1234", 10),
    externalInvitedPeople: process.env.BOOKING_EXT_PEOPLE || '',
    description: process.env.BOOKING_DESCRIPTION || ''
}