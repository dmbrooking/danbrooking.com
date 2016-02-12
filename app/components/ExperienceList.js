import React from 'react'
import Firebase from 'firebase'
import _ from 'lodash'

import Education from './Education'
import Job from './Job'

export default class ExperienceList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      educations: [],
      jobs: []
    }

    this.firebaseEducationsRef = new Firebase('https://danbrooking.firebaseio.com/educations')
    this.firebaseEducationsRef.once('value', (dataSnapshot) => {
      var educations = dataSnapshot.val().reverse()
      this.setState({
        educations: educations
      })
    })

    this.firebaseJobsRef = new Firebase('https://danbrooking.firebaseio.com/jobs')
    this.firebaseJobsRef.once('value', (dataSnapshot) => {
      var jobs = dataSnapshot.val().reverse()
      this.setState({
        jobs: jobs
      })
    })
  }

  render () {
    var educationNodes = _.values(this.state.educations).map((education, i) => {
      return (
        <Education education={education} key={i} />
      )
    })

    var jobNodes = _.values(this.state.jobs).map((job, i) => {
      return (
        <Job job={job} key={i} />
      )
    })

    return (
      <div id='experiences' className='container'>
        <h2>Experiences</h2>
        <p className='lead'>
          {this.props.quote}
        </p>
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

ExperienceList.propTypes = {
  quote: React.PropTypes.object
}
