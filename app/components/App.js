import React from 'react'
import Navigation from './Navigation'
import Jumbotron from './Jumbotron'
import Profile from './Profile'
import ExperienceList from './ExperienceList'
import AbilityList from './AbilityList'
import Project from './Project'
import Contact from './Contact'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/styles.css'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Navigation/>
        <Jumbotron/>
        <Profile/>
        <ExperienceList/>
        <AbilityList/>
        <Project/>
        <Contact/>
      </div>
    )
  }
}
