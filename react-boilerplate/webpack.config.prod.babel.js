import Webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export default {
  context: `${__dirname}/src`,
  entry: {
    'app.bundle': ['./scripts/app'],
  },
  output: {  // 出力されるファイル[name]とかでentryのキー名でファイルを吐き出せる
    path: `${__dirname}/public`,
    filename: '/[name].js',
  },
  resolve: {  // 拡張子を省略できる
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css'),
    new CommonsChunkPlugin('common.bundle.js'),
    new Webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    preLoaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
      },
    ],
  },
  eslint: { configFile: './.eslintrc' },
  postcss: [
    autoprefixer,
    cssnano,
  ],
  // 以下のように includePaths のオプションを設定するのは
  // 外部ライブラリを用いる場合でnode_modules配下にもファイルが置かれている場合に使う
  // sassLoader: {
  //   includePaths: [path.resolve(__dirname, "./some-folder")]
  // }
}
