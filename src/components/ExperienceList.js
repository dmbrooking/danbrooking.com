import React from 'react';
import _ from 'lodash';
import Education from './Education';
import Job from './Job';
import educations from '../data/educations.json';
import jobs from '../data/jobs.json';

export default class ExperienceList extends React.Component {
  render() {
    var educationNodes = _.values(educations).map((education, i) => {
      return (
        <Education education={education} key={i} />
      )
    })

    var jobNodes = _.values(jobs).map((job, i) => {
      return (
        <Job job={job} key={i} />
      )
    })

    return (
      <div id='experiences' className='container'>
        <h2>Experience</h2>
        {this.props.quote}
        <hr />
        <h3>Work</h3>
        <div className='experiences'>
          {jobNodes}
        </div>
        <hr />
        <h3>Education</h3>
        <div className='experiences'>
          {educationNodes}
        </div>
      </div>
    )
  }
}