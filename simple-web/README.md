# css 練習用

どこのディレクトリでもいいから src/ 以下の .scss と .js をバンドルする
クラス名でスタイリングする必要がありそう(BEM か...)
html で明示的に読み込むやつを指定する?! とかできるのかな

```
$ npm install --save-dev webpack webpack-cli webpack-dev-server
```

以下の 2 つは build.js,build.css にまとめてられてもいいけど、まとめなくても各 html で個別に呼べるところまでは
scss と js(ts) もビルドできるようにしたいよなー

以下のやり方だとどこかの js 　で html を import しないとビルドされないのでちょっと違うなという感じ
https://webpack.js.org/loaders/html-loader/#export-into-html-files

```
$ npm install --save-dev html-loader extract-loader file-loader
```

以下のやり方を踏襲する感じかも
https://blog.isystk.com/system_develop/frontend/webpack/194/

```
$ npm install html-webpack-plugin --save-dev
```

## 使い方

```
$ npx degit yusabana/boilerplates/simple-web
```

public/index.html 以外は全てコピーされる仕様なので、適当に必要なプッシュ




