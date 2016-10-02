const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'desktop.bundles/index/index.bemjson.js'),
	output: {
		path: path.resolve(__dirname, 'desktop.bundles/index'),
		filename: 'index.log'
	},
	module: {
		loaders: [
			{
				test: /\.bemjson.js$/,
				loader: 'bemjson-to-html-loader'
			}
		]
	},
	bem: {
		levels: [
			path.resolve(__dirname, 'libs/bem-core/common.blocks'),
			path.resolve(__dirname, 'libs/bem-core/desktop.blocks'),
			path.resolve(__dirname, 'libs/bem-components/common.blocks'),
			path.resolve(__dirname, 'libs/bem-components/desktop.blocks'),
			path.resolve(__dirname, 'common.blocks'),
			path.resolve(__dirname, 'desktop.blocks')
		]
	}
};
