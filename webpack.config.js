// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'main.ts'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  devtool: 'source-map',
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
