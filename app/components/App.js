import React from 'react'
import Navigation from './Navigation'
import Jumbotron from './Jumbotron'
import Profile from './Profile'
import ExperienceList from './ExperienceList'
import AbilityList from './AbilityList'
import ProjectList from './ProjectList'
import Quote from './Quote'
import Contact from './Contact'
import Firebase from 'firebase'
import _ from 'lodash'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/styles.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quotes: []
    }

    this.firebaseQuotesRef = new Firebase('https://danbrooking.firebaseio.com/quotes')
    this.firebaseQuotesRef.once('value', (dataSnapshot) => {
      var quotes = _.shuffle(dataSnapshot.val()).slice(0, 3)
      this.setState({
        quotes: quotes
      })
    })
  }

  render () {
    var quoteNodes = _.values(this.state.quotes).map((quote, i) => {
      return (
        <Quote quote={quote} key={i} />
      )
    })

    return (
      <div>
        <Navigation/>
        <Jumbotron/>
        <Profile/>
        <ExperienceList quote={quoteNodes.slice(0, 1)}/>
        <AbilityList quote={quoteNodes.slice(1, 2)}/>
        <ProjectList quote={quoteNodes.slice(2, 3)}/>
        <Contact/>
      </div>
    )
  }
}
