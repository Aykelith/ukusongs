const webpack = require("webpack");
const path = require("path");

const isProduction = true;

let extraPlugins = [];
let extraOptimizations = {};

if (isProduction) {
	const TerserJSPlugin = require("terser-webpack-plugin");
	const MiniCssExtractPlugin = require("mini-css-extract-plugin");
	const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
	const CompressionPlugin = require("compression-webpack-plugin");

	extraPlugins = [
		new CompressionPlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].[contenthash].css"
		})
	];

	extraOptimizations = {
		minimizer: [
			new TerserJSPlugin({}),
			new OptimizeCSSAssetsPlugin({})
		]
	};
}

 let DefinePluginArgs = {
	__production: isProduction ? "true" : "false",
	"process.env": {
		"NODE_ENV": JSON.stringify(isProduction ? "production" : "development")
	},
};

let plugins = [
	new webpack.DefinePlugin(DefinePluginArgs),
	...extraPlugins
];

module.exports = {
	mode: isProduction ? "production" : "development",
	entry: path.join(__dirname, "tmp", "index.js"),
	context: path.join(__dirname, "tmp"),
	output: {
		path: path.join(__dirname, "docs"),
		publicPath: "/",
		chunkFilename: "[name].[contenthash].chunk.js",
		filename: "[name].bundle.js"
	},
	devtool: isProduction ? "" : "cheap-module-eval-source-map",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [ /\.tem\.js$/ ],
				loader: "babel-loader",
				options: {
					cacheDirectory: path.join(__dirname, "webpackTmp", "babel_cache"),
					configFile: path.join(__dirname, "babel.web.config.js")
				}
			},
			{
				test: /\.scss|.css$/,
				use: [
					isProduction
						? {
							loader: require("mini-css-extract-plugin").loader,
							options: {
								publicPath: "/"
							}
						}
						: {
							loader: "style-loader"
						},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							url: false
						}
					},
					{
						loader: "postcss-loader",
						options: {
							config: {
								path: __dirname
							}
						}
					},
					{
						loader: "resolve-url-loader",
						options: {}
					},
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								includePaths: [
									path.join(__dirname, "tmp")
								]
							},
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "@svgr/webpack",
						options: {
							icon: true,
							// replaceAttrValues:
						},
					},
				],
			}
		]
	},
	plugins,
	optimization: {
		...extraOptimizations
	},
	resolve: {
		modules: [path.join(__dirname, "node_modules")],
		alias: {},
		extensions: [".js", ".jsx"]
	},
	externals: {
		fs: "{}",
		tls: "{}",
		net: "{}",
		console: "{}",
		v8: "{}"
	}
};