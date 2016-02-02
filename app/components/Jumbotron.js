import React from 'react'

export default class Jumbotron extends React.Component {
  render () {
    return (
      <div id='top' className='jumbotron' data-src='/view/images/metro_animation.gif' data-position='center right'>
        <div className='container'>
          <h1 className='headline'>Dan Brooking</h1>
        </div>

        <div className='overlay'></div>

        <a href='#profile' className='scroll-down'>
          <span className='glyphicon glyphicon-chevron-down'></span>
        </a>
      </div>
    )
  }
}
