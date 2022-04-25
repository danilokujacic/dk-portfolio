const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = ({ mode }) => ({
  mode,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true, // cleans old files
  },
  optimization: {
    runtimeChunk: mode === 'development',
    minimize: mode === 'production', // Enables Terser minifier
    removeAvailableModules: mode === 'production',
    removeEmptyChunks: mode === 'production',
  },
  devtool:
    mode === 'development' ? 'eval-cheap-module-source-map' : 'source-map', // provides soruce map for debugging, finds files where error occurs
  devServer: {
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCss.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'], // No need to add those extensions anymore when importing
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: 'Portfolio',
      template: 'src/index.html',
      inject: 'body',
    }),
    new MiniCss({
      filename: 'styles.css',
    }),
  ],
});
