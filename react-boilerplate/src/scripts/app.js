import React from 'react'
import ReactDom from 'react-dom'
import '../styles/app.scss'

// props,refsがない場合、class で書くと react/prefer-stateless-function で引っかかってしまう
// import React, { Component } from 'react'
// class App extends Component {
//   constructor() {
//     const hoge = 'fuga'
//     console.error(hoge)
//   }
//   render() {
//     return <div>ねローーHello, World! <strong>Component</strong></div>
//   }
// }
//
// 以下のように通常のファンクションとする
function App() {
  return <div>Hello, World!!! <strong>Component</strong></div>
}

ReactDom.render(
  <App />,
  document.getElementById('container')
)
