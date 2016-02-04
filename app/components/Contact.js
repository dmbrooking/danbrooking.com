import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class Contact extends React.Component {
  render () {
    return (
      <div className='background-blue'>
        <div id='contact' className='container'>
          <h2>Contact</h2>
          <p className='lead'>
            &ldquo;If I had asked people what they wanted, they would have said faster horses. &rdquo;<br />- Henry Ford
          </p>
          <hr />
          <div className='row'>
            <div className='col-lg-12'>
              <ul className='no-bullets'>
                <li>
                  <a href='http://twitter.com/dbrooking' target='_blank'>
                    <span><FontAwesome name='twitter'/></span>
                    &nbsp;&nbsp;
                    http://twitter.com/dbrooking
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/danbrooking' target='_blank'>
                    <span><FontAwesome name='linkedin'/></span>
                    &nbsp;&nbsp;
                    https://www.linkedin.com/in/danbrooking
                  </a>
                </li>
                <li>
                  <a href='mailto:dmbrooking@gmail.com'>
                    <span><FontAwesome name='envelope' /></span>
                    &nbsp;&nbsp;
                    dmbrooking@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    )
  }
}
