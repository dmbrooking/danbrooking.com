import React from 'react'

export default class Tool extends React.Component {
  render() {
    var stars = []

    for (var i = 0; i < this.props.tool.rating; i++) {
      stars.push(<span className='glyphicon glyphicon-star filled' key={i}></span>)
    }

    for (var j = this.props.tool.rating; j < 5; j++) {
      stars.push(<span className='glyphicon glyphicon-star' key={j}></span>)
    }

    return (
      <li>
        <span className='ability-title'>{this.props.tool.name}</span>
        <span className='ability-score'>
          {stars}
        </span>
      </li>
    )
  }
}
