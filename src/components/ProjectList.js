import React from 'react';
import _ from 'lodash';
import Project from './Project';
import projects from '../data/projects.json';

export default class ProjectList extends React.Component {
  render() {
    var projectNodes = _.values(projects).map((project, i) => {
      return (
        <Project project={project} key={i} />
      )
    })

    return (
      <div id='projects' className='container'>
        <h2>Projects</h2>
        {this.props.quote}
        <hr />
        <div className='row'>
          {projectNodes}
        </div>
      </div>
    )
  }
}
