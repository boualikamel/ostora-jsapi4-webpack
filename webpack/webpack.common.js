const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ArcGISPlugin = require('@arcgis/webpack-plugin');
var webpack = require('webpack');
// const HasJsPlugin = require('webpack-hasjs-plugin')

module.exports = {
    entry: './src/js/importing.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: [/.js$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: [/.css$|.scss$/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images'
                        }
                    },

                ]
            },
            {
                test: /\.(wsv|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "build/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: "dojo-webpack-loader",
                include: path.resolve(__dirname, '../dojo/'),
            }
           
            
        ]
        

    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
          }),
        new CleanWebpackPlugin(),
        new ArcGISPlugin({
            useDefaultAssetLoaders: false,
            // exclude 3D modules from build
            exclude3D:true,
           
            userDefinedExcludes: [
                "arcgis-js-api/layers/BingMapsLayer",
                "arcgis-js-api/layers/CSVLayer",
                "arcgis-js-api/layers/GeoRSSLayer",
                "arcgis-js-api/layers/ImageryLayer",
                "arcgis-js-api/layers/KMLLayer",
                "arcgis-js-api/layers/MapImageLayer",
                "arcgis-js-api/layers/OpenStreetMapLayer",
                "arcgis-js-api/layers/StreamLayer",
                "arcgis-js-api/layers/WMSLayer",
                "arcgis-js-api/layers/WMTSLayer",
                "arcgis-js-api/layers/WebTileLayer",
                "arcgis-js-api/views/3d"
            ]
           /*
           locales : ['','']
           root : '.'
           options :{
                async
                loaderConfig
                environment
                buildEnvironment
                globalContext
                loader
                locales
                cjsRequirePatterns
                coerceUndefinedToFalse
                noConsole
                runtimeFeatures
           }
           

           */
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'ostora-jsapi4-webpack',
            template: './src/index.html',
            chunksSortMode: 'none',
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new CopyWebpackPlugin([{
            from: './src/assets/images',
            to: 'assets/images'
        }]),

        // that help enable the removal of unused code.
        // new HasJsPlugin({
        //     features: {
        //       "some-static-feature": false
        //     }
        //   }),
        
        
   


    ],

    resolve: {
        modules: [path.resolve(__dirname, "/src"), "node_modules/"],
        extensions: [".js", ".scss"]
    },

    node: {
        process: false,
        global: false,
        fs: "empty"
    },
    


}