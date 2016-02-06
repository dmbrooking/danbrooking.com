import React from 'react'

export default class Project extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='col-md-6 col-sm-12 col-xs-12'>
      <figure className='effect'>
        <img src={'images/' + this.props.project.image} alt='Mals' />
        <figcaption>
          <h3>Mals</h3>
          <p>Mals, a creative agency located in Rotterdam.</p>
          <p><strong>Tags:</strong> <br />Development, Wordpress, Bootstrap</p>
          <a href='http://studiomals.com' target='_blank'>View more</a>
          <span className='icon'>
            <span className='glyphicon glyphicon-new-window'></span>
          </span>
        </figcaption>
      </figure>
      </div>
    )
  }
}

Project.propTypes = {
  project: React.PropTypes.object
}
