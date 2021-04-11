// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// const env = process.env.NODE_ENV || 'development'
// const isDevelopment = env === 'development'

module.exports = {
  entry: path.join(__dirname, 'src', 'main.ts'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  target: 'node',
  resolve: {
    extensions: ['.ts'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
