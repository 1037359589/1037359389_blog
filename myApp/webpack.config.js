var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//var HtmlwebpackPlugin = require('html-webpack-plugin');
//var labeledModulesPlugin=new webpack.dependencies.LabeledModulesPlugin();
var path = require("path");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ROOT_PATH = path.resolve(__dirname);
var ADMIN_PUBLIC = path.resolve(ROOT_PATH, 'public/Admin');
var BLOG_PUBLIC = path.resolve(ROOT_PATH, 'public/Blog');
module.exports = {
    entry: {
        test: ADMIN_PUBLIC+"/js/test.js",
        test2: BLOG_PUBLIC+"/js/test.js"
    },
    output: {
        publicPath:"/blog/Admin/Web_Static/assets/build/js/", //若图片大小超过限制,则这条语句自动生成新的图片并加载
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
                test:/\.(png|jpe?g|gif)$/,loader:"url-loader?limit=40000000&name=[name].[ext]&mimetype=image/jpg",
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
        //alias:{
        //    jquery:"../plugins/jquery-1.11.3.min"
        //},
        extensions: ['', '.js', '.json']
    },
    plugins: [
        commonsPlugin,
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true
    },
};