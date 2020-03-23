const moment = require('moment-timezone');

module.exports = function dateFilter(value) {
	const dateObject = moment.unix(Number(value));
	const tzone = dateObject.tz('America/New_York');

	return `${dateObject.format('MMMM D')}, ${tzone.format('h:mma z')}`;
};
