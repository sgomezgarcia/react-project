module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'index-bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};