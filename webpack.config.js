const path = require('path');

module.exports = {
    entry: './blocks/index.js',

    output: {
        path: path.resolve(__dirname, './'),
        filename: 'app.js'
    },

    devtool: "source-map",
    watch: true,

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {presets: ['es2015', 'react']},
            },
            {
                test: /\.pug/,
                loader: 'pug-loader'
            }
        ]
    }

};