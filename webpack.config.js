const webpack = require('webpack');

module.exports = {
	context: `${__dirname}/client`,
	entry: './index.js',
	output: {
		path: `${__dirname}/build`,
		filename: 'webpack.js'
	},

	module: {
		loaders: [
			// babel-loader
			{
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015', 'react'],
					plugins: ['transform-decorators-legacy']
	      }
			},

			// stylus-loader
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			}
		]
	}
}
