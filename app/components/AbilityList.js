import React from 'react'
import Firebase from 'firebase'
import _ from 'lodash'

import Tool from './Tool'
import Skill from './Skill'

export default class AbilityList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      skills: [],
      tools: []
    }

    this.firebaseToolsRef = new Firebase('https://danbrooking.firebaseio.com/tools')
    this.firebaseToolsRef.once('value', (dataSnapshot) => {
      var tools = dataSnapshot.val()
      this.setState({
        tools: tools
      })
    })

    this.firebaseSkillsRef = new Firebase('https://danbrooking.firebaseio.com/skills')
    this.firebaseSkillsRef.once('value', (dataSnapshot) => {
      var skills = dataSnapshot.val()
      this.setState({
        skills: skills
      })
    })
  }

  render () {
    var toolNodes = _.values(this.state.tools).map((tool, i) => {
      console.log(i)
      return (
        <Tool tool={tool} key={i} />
      )
    })

    var skillNodes = _.values(this.state.skills).map((skill, i) => {
      return (
        <Skill skill={skill} key={i} />
      )
    })

    return (
      <div className='background-white'>
        <div id='abilities' className='container'>
          <h2>Abilities</h2>
          <p className='lead'>
            &ldquo;Life without knowledge is death in disguise.&rdquo;<br/>- Talib Kweli
          </p>
          <hr />
          <h3>Skills</h3>
          <div className='row'>
            <div className='col-md-6'>
              <ul className='no-bullets'>
                {skillNodes.slice(0, 14)}
              </ul>
            </div>
            <div className='col-md-6'>
              <ul className='no-bullets'>
                {skillNodes.slice(14, 28)}
              </ul>
            </div>
          </div>
          <div className='text-center project-referal'>
            <p>This project is built as a React application ported from <a href='https://github.com/pascalvgemert/resume'>Pascal van Gemert</a></p>
            <a href='https://github.com/dmbrooking/danbrooking.com' className='btn btn-primary' target='_blank'>See project on Github</a>
          </div>
          <hr />
          <h3>Tools</h3>
          <div className='row'>
            <div className='col-md-6'>
              <ul className='no-bullets'>
                {toolNodes.slice(0, 8)}
              </ul>
            </div>
            <div className='col-md-6'>
              <ul className='no-bullets'>
                {toolNodes.slice(8, 16)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
