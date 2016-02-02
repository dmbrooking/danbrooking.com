import React from 'react'

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default' id='navbar' role='navigation'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-ex1-collapse'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </div>

        <div className='collapse navbar-collapse navbar-ex1-collapse'>
          <ul className='nav navbar-nav'>
            <li className='active'><a href='#profile'>Profile</a></li>
            <li><a href='#experiences'>Experiences</a></li>
            <li><a href='#abilities'>Abilities</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
