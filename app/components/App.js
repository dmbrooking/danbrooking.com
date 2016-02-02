import React from 'react'
import Jumbotron from './Jumbotron'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/styles.css'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Jumbotron/>
      </div>
    )
  }
}
