module.exports = {
    entry: './src/dummyWeb.jsx',
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve:{
        extensions: ['*','.js','.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'index-bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};