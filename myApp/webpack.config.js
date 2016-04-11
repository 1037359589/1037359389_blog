var webpack = require("webpack");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//var HtmlwebpackPlugin = require('html-webpack-plugin');
//var labeledModulesPlugin=new webpack.dependencies.LabeledModulesPlugin();
var path = require("path");
var glob=require('glob');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ROOT_PATH = path.resolve(__dirname);
var ADMIN_PUBLIC = path.resolve(ROOT_PATH, 'public/Admin');
var BLOG_PUBLIC = path.resolve(ROOT_PATH, 'public/Blog');
module.exports = {
    entry: {
        test: glob.sync(ADMIN_PUBLIC+"/js/test/*.js"),
        test2: BLOG_PUBLIC+"/js/test.js",
        vendor: ['jquery','react','react-dom'] //第三方库
    },
    target: 'node',
    output: {
        publicPath:"/myApp/public", //若图片大小超过限制,则这条语句自动生成新的图片并加载
        path: path.join(__dirname, "public/build"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    module:{
        loaders:[
            {
                test:/\.css$/,loader:'style-loader!css-loader'
            },
            {
                test:/\.(png|jpe?g|gif)$/,loader:"url-loader?limit=40000000&name=[name].[ext]",
                include:ADMIN_PUBLIC+"/css/"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve:{
        root:ROOT_PATH,
        extensions: ['', '.js', '.json']
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            React:'react',
            ReactDOM:'react-dom'
        }),//这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        //new webpack.DefinePlugin({
        //    'process.env.NODE_ENV': '"development"'
        //}),
        //new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        publicPath:'http://localhost:8080',
        proxy: {
            "*": "http://localhost:3000"
        }
    },
};