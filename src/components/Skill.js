import React from 'react';

export default class Skill extends React.Component {
  render() {
    var stars = []

    for (var i = 0; i < this.props.skill.rating; i++) {
      stars.push(<span className='glyphicon glyphicon-star filled' key={i}></span>)
    }

    for (var j = this.props.skill.rating; j < 5; j++) {
      stars.push(<span className='glyphicon glyphicon-star' key={j}></span>)
    }

    return (
      <li>
        <span className='ability-title'>{this.props.skill.name}</span>
        <span className='ability-score'>
          {stars}
        </span>
      </li>
    )
  }
}