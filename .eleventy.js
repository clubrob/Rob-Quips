/* 11ty plugins */
const rss = require('@11ty/eleventy-plugin-rss');

/* Filter Imports */
const cssminFilter = require('./src/filters/cssmin-filter.js');
const dateFilter = require('./src/filters/date-filter.js');
const limitFilter = require('./src/filters/limit-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = eleventyConfig => {
	// Plugins
	eleventyConfig.addPlugin(rss);

	// Passthrough
	eleventyConfig.addPassthroughCopy('src/assets');

	// Filters
	eleventyConfig.addFilter('cssminFilter', cssminFilter);
	eleventyConfig.addFilter('dateFilter', dateFilter);
	eleventyConfig.addFilter('limitFilter', limitFilter);
	eleventyConfig.addFilter('markdownFilter', markdownFilter);
	eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

	// Collections
	eleventyConfig.addCollection('items', collection => {
		return collection
			.getFilteredByGlob('src/posts/*.md')
			.sort((a, b) => Number(a.data.title) - Number(b.data.title));
	});

	return {
		dir: {
			input: 'src',
			output: 'www'
		},
		passthroughFileCopy: true
	};
};
