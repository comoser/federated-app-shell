const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const pkg = require('./package.json');
const devMode = true;
const BuildHashPlugin = require('@module-federation/dashboard-plugin');

module.exports = {
    entry: './src/index',
    cache: false,

    mode: 'development',
    devtool: 'eval-cheap-source-map',

    watchOptions: {
        aggregateTimeout: 600,
        poll: 1000,
        ignored: 'node_modules/**',
    },

    optimization: {
        minimize: false,
    },

    output: {
        publicPath: 'http://localhost:3001/',
    },

    resolve: {
        alias: {path: 'path-browserify'},
        extensions: ['.jsx', '.js', '.json'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('@babel/preset-react')],
                },
            },
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                    quiet: true,
                },
                exclude: /node_modules|tests/,
            },
            {
                test: /\.md$/,
                loader: 'raw-loader',
            },
            {
                test: /\.less$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    mimetype: 'image/png',
                },
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    mimetype: 'image/png',
                },
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    mimetype: 'image/png',
                },
            },
            {
                test: /\.eot$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    mimetype: 'image/png',
                },
            },
            {
                test: /\.gif$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    mimetype: 'image/png',
                },
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    mimetype: 'image/png',
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'appshell',
            library: {type: 'var', name: 'appshell'},
            filename: 'remoteEntry.js',
            remotes: {
                favorites: 'favorites',
                property: 'property',
                search: 'search',
            },
            shared: {
                react: {eager: true},
                'react-dom': {eager: true},
                'react-router-dom': {eager: true},
                redux: {eager: true},
                'react-redux': {eager: true},
                reselect: {eager: true},
                'redux-micro-frontend': {
                    singleton: true,
                },
            },
            exposes: {
                './protocol': './src/protocol',
            },
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: `${pkg.name} - ${pkg.description}`,
            template: './public/index.html',
        }),
        new BuildHashPlugin({
            filename: 'dashboard.json',
            dashboardURL: 'http://localhost:3000/api/update',
            metadata: {
                source: {
                    url:
                        'https://github.com/module-federation/federation-dashboard/tree/master/dashboard-example/home',
                },
                remote: 'http://localhost:3001/remoteEntry.js',
            },
            reportFunction: (data) => {
                console.log('afterDone', data);
            },
        }),
    ],
};
