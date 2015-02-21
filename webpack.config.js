var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['jsx?harmony'] },
            { test: /\.jsx$/, loaders: ['jsx?harmony'] }
        ]
    }
};