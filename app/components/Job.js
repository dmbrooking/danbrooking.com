import React from 'react'

export default class Job extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='experience row'>
        <div className='col-md-4'>
          <h4>{this.props.job.name}</h4>
          <p className='experience-period'>{this.props.job.dates}</p>
        </div>
        <div className='col-md-8'>
          <p>
            <strong>{this.props.job.title}</strong>
            <span className='hidden-phone'>{this.props.job.summary}</span>
            <span className='experience-details'>
              <span className='location'>
                <span className='glyphicon glyphicon-map-marker'></span>
                {this.props.job.location}
              </span>
              <span className='seperator'>|</span>
              <span className='link'>
                <span className='glyphicon glyphicon-link'></span>
                <a href={this.props.job.website} target='_blank'>{this.props.job.website}</a>
              </span>
            </span>
          </p>
        </div>
      </div>
    )
  }
}

Job.propTypes = {
  job: React.PropTypes.object
}
