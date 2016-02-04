import React from 'react'

export default class Education extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='experience row'>
        <div className='col-md-4'>
          <h4>{this.props.education.name}</h4>
          <p className='experience-period'>{this.props.education.dates}</p>
        </div>
        <div className='col-md-8'>
          <p>
            <strong>{this.props.education.descripion}</strong>
            <span className='hidden-phone'>{this.props.education.summary}</span>
            <span className='experience-details'>
              <span className='location'>
                <span className='glyphicon glyphicon-map-marker'></span>
                {this.props.education.location}
              </span>
            </span>
          </p>
        </div>
      </div>
    )
  }
}

Education.propTypes = {
  education: React.PropTypes.instanceOf(Education)
}
