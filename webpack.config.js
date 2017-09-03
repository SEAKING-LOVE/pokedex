const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist');
const TEMPLATE_PATH = path.resolve(ROOT_PATH, 'index.html');
const ENTRY_PATH = path.resolve(ROOT_PATH, 'src/index.js');


module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: ENTRY_PATH,
	output: {
		filename: 'bundle.js',
		path: OUTPUT_PATH,
		publicPath: 'dist/'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/, 
			exclude: /node_modules/,
			use: [
			'jshint-loader',
			{
				loader: 'babel-loader',
				options: {
					presets: ['es2015', 'react']
				}
			}
			]
		},
		{
			test: /\.scss$/,
			use: [
			'style-loader',
			'css-loader',
			'sass-loader'
			]
		}
		]
	}
};