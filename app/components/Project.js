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
          <h3>{this.props.project.name}</h3>
          <p>{this.props.project.description}
          <br/>
         <strong>Tags:</strong> <br />{this.props.project.tags}</p>
          <a href='{this.props.project.url}' target='_blank'>View more</a>
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
