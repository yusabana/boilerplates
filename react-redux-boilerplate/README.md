React Boilerplate
========

Using ECMAScript2015.
My building following tools.

Usage
---------

### First, npm packages install.

```
npm install
```


### development

You can use webpack-dev-server.

```
npm start 
```

Access to http://localhost:4000.
You can edit public/index.html or src/scripts,styles/, then browser is reloaded hot.

Others, you can build using next command.
Genarate, built css, javascript and sourcemap.

```
npm run webpack
```

### production

Generate built and minify css, javascript. 

```
npm run webpack:prod
```

Goal
---------

* [x] eslint
* [x] babel(es2015, stage-0のシンタックスまで < stage-0はまだ)
* [x] webpackビルド
* [x] sassビルド
* [x] post css (autoprefixer、圧縮)
* [x] webpack共通のJS と アプリケーションで使うJS へ切りだし(CommonChunkPluginを使う)
* [ ] CSSの外部ライブラリのバージョン管理(burbon系ならnpmを使えばいいんじゃないか)
* [x] sourcemapの付ける(devの時)
* [ ] Railsとの連携 digests付きのassets（http://engineer.crowdworks.jp/entry/2016/05/24/174511）
* [ ] TestingFramework
* [x] edtorconfig

References
---------

* [【翻訳】Web世代のデベロッパーのためのmake - MOL](http://t32k.me/mol/log/make-for-the-web-generation/)

* [Grunt/Gulpで憔悴したおっさんの話 - MOL](http://t32k.me/mol/log/npm-run-script/)
  * [npm-run-script version](https://github.com/t32k/maple/tree/run-scripts-ver)
  * [gulp version](https://github.com/t32k/maple/blob/version-2015/package.json)

* [\[意訳\]私がGulpとGruntを手放した理由 - Qiita](http://qiita.com/chuck0523/items/dafdbd19c12efd40e2de)
  * https://github.com/coryhouse/react-slingshot

* webpack
  * [【意訳】Webpackの混乱ポイント - Qiita](http://qiita.com/chuck0523/items/caacbf4137642cb175ec)
  * [webpack入門 - Qiita](http://qiita.com/ossan-engineer/items/8352bdeab9ce8c8c00ef)

* [\[意訳\]グローバルCSSの終焉 - Qiita](http://qiita.com/chuck0523/items/9a3cc6a2190dfb71a684)


Tools
---------

* webpack
* babel
* react
* eslint

```
$ npm install --save-dev webpack webpack-dev-server file-loader babel-loader babel-core babel-cli babel-preset-es2015 babel-preset-react


# https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
$ npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
$ npm install --save-dev eslint-loader


$ npm install --save react react-dom
```

### Tools Configuration

#### .babelrc

Enable 'presets' es2015, react

#### webpack.config.babel.js

configuration webpack with es2015

* [petehunt/webpack-howto](https://github.com/petehunt/webpack-howto#webpack-howto)

#### .eslintrc

Use yaml style formats to configuration, enable eslint airbnb style.

* [ESLint Rules](http://eslint.org/docs/rules/)
* [eslint-config-airbnbの導入 - Qiita](http://qiita.com/bohebohechan/items/0332b557f80150e714de)

```
# enable airbnb style see following .eslintrc

extends:
  - airbnb
plugins:
  - react
```

Javascript Style Guides
---------

* https://github.com/airbnb/javascript
* [Airbnb React/JSX Style Guide - Qiita](http://qiita.com/koukun/items/e64762e407b8dd5e0247)


CSS sass
---------

### コーディーングガイド
* [hiloki/flocss: CSS organization methodology.](https://github.com/hiloki/flocss)
* https://github.com/airbnb/css
* [nao215/css-style-guide: A mostly reasonable approach to CSS and Sass.](https://github.com/nao216/css-style-guide)


### webpackでのビルド (css や sass を使うときは以下の様なプラグインも差しこむ必要があるかも)

* [webpackでcssとimageをバンドルする - Qiita](http://qiita.com/rglay/items/1bdbee5dd5657012b5fa)
  * css-loader, sass-loader


* [PostCSS とは何か // Speaker Deck](https://speakerdeck.com/jmblog/postcss-tohahe-ka)
  * sassかまして、postcssでautoprefixerを使う

* [webpackを使ってsassをコンパイルできるようにしよう！ - Qiita](http://qiita.com/nicchi__1985/items/e30e73de6d8443909537)
  * ビルドにはとても参考になる。 **cssとjsの設定を分けている**

```
# style-loaderとcss-loaderは一緒に使ったほうがいいとstyle-loaderのgithubに書いている
# sass-loaderとnode-sassは一緒に使うようにとsass-loaderのgithubに書いている

$ npm install --save-dev style-loader css-loader sass-loader node-sass

# 通常はCSSも含め1つのjavascriptファイル収まるが以下を入れることでCSSとJSのファイルを分けられる
# http://qiita.com/nicchi__1985/items/e30e73de6d8443909537
# http://webpack.github.io/docs/stylesheets.html#separate-css-bundle
$ npm install --save-dev extract-text-webpack-plugin

# postcss関連
$ npm install --save-dev postcss-loader autoprefixer cssnano
```

### Source maps

https://github.com/jtangelder/sass-loader#source-maps


### External Libraries BurbonとNeet

[webpackを使ってnode-sass環境にbourbon3兄弟を導入する - Qiita](http://qiita.com/cotto89/items/ddd12a24cd40fac5c419)
https://tech.recruit-mp.co.jp/front-end/getting-started-gulp-sass-bourbon/


TestingFramework
----------




EditorConfig
----------

* [editorconfigでエディタの設定を共通化 - Septeni Engineer's Blog](http://labs.septeni.co.jp/entry/2016/07/04/162202)
* [EditorConfigをつかってコードスタイルをプロジェクト毎に管理する](http://blog.a4works.co.jp/archives/479)
