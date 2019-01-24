module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: '/home/artem/WebstormProjects/test/my-app/public'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    // presets: ['react','es2015']
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    watch: true,
    devtool: 'source-map',
    resolve: { extensions: ['.js', '.jsx'], modules: ['node_modules', '/home/artem/WebstormProjects/test/my-app'] }
};