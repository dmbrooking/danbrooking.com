import React from 'react'
import Firebase from 'firebase'
import _ from 'lodash'

import Education from './Education'
import Job from './Job'

export default class Experience extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      educations: [],
      jobs: []
    }

    this.firebaseEducationsRef = new Firebase('https://danbrooking.firebaseio.com/educations')
    this.firebaseEducationsRef.once('value', (dataSnapshot) => {
      var educations = dataSnapshot.val()
      this.setState({
        educations: educations
      })
    })

    this.firebaseJobsRef = new Firebase('https://danbrooking.firebaseio.com/jobs')
    this.firebaseJobsRef.once('value', (dataSnapshot) => {
      var jobs = dataSnapshot.val()
      this.setState({
        jobs: jobs
      })
    })
  }

  render() {
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
          &ldquo;Protons give an atom its identity, electrons its personality.&rdquo;<br />- Bill Bryson, A short history of nearly everything
        </p>

        <hr />

        <h3>Educations</h3>

        <div className='experiences'>
          {educationNodes}
        </div>

        <hr />

        <h3>Careers</h3>

        <div className='experiences'>
          {jobNodes}
        </div>
      </div>
    )
  }
}