var path = require('path');
module.exports = {
    entry: {
        app: [
            'whatwg-fetch',
            './index.js'
        ]
    },
    output: {
        path: __dirname + "/prod",
        filename: "index.js",
        library: "firstIndex"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: 'babel-loader'},
            { test: /\.(jpg|gif)$/, loader: "file-loader" }


        ]

    },

    node: {
        fs: "empty"
    },
    watch: true,
    watchOptions: {
        agregateTiomeout: 100
    }
}
