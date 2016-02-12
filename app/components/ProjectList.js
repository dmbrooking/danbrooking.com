import React from 'react'
import Firebase from 'firebase'
import _ from 'lodash'

import Project from './Project'

export default class ProjectList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: []
    }

    this.firebaseProjectsRef = new Firebase('https://danbrooking.firebaseio.com/projects')
    this.firebaseProjectsRef.once('value', (dataSnapshot) => {
      var projects = dataSnapshot.val()
      this.setState({
        projects: projects
      })
    })
  }

  render () {
    var projectNodes = _.values(this.state.projects).map((project, i) => {
      return (
        <Project project={project} key={i} />
      )
    })

    return (
      <div id='projects' className='container'>
        <h2>Projects</h2>
        {this.props.quote}
        <hr/>
        <div className='row'>
          {projectNodes}
        </div>
      </div>
    )
  }
}

ProjectList.propTypes = {
  quote: React.PropTypes.array
}
