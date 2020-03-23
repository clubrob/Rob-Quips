const moment = require('moment');

module.exports = function dateFilter(value) {
	const dateObject = moment.unix(Number(value));

	return `${dateObject.format('MMMM D')}, ${dateObject.format('h:mma')}`;
};
