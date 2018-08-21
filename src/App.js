import React from 'react';
import _ from 'lodash';
import Navigation from './components/Navigation';
import Jumbotron from './components/Jumbotron';
import Profile from './components/Profile';
import ExperienceList from './components/ExperienceList';
import AbilityList from './components/AbilityList';
import ProjectList from './components/ProjectList';
import Quote from './components/Quote';
import Contact from './components/Contact';
import quotes from './data/quotes.json';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomQuotes: _.shuffle(quotes).slice(0, 5)
    }
  }

  render() {
    var quoteNodes = _.values(this.state.randomQuotes).map((quote, i) => {
      return (
        <Quote quote={quote} key={i} />
      )
    })

    return (
      <div>
        <Navigation />
        <Jumbotron />
        <Profile />
        <ExperienceList quote={quoteNodes.slice(0, 1)} />
        <AbilityList quote={quoteNodes.slice(1, 2)} />
        <ProjectList quote={quoteNodes.slice(2, 3)} />
        <Contact quote={quoteNodes.slice(4, 5)} /> */}
      </div>
    )
  }
}