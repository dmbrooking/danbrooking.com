import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='background-blue'>
        <div id='contact' className='container'>
          <h2>Contact</h2>
          {this.props.quote}
          <hr />
          <div className='row'>
            <div className='col-lg-12'>
              <ul className='no-bullets'>
                <li>
                  <a href='https://www.linkedin.com/in/danbrooking' target='_blank'>
                    <span><FontAwesome name='linkedin' /></span>
                    &nbsp;&nbsp;
                    https://www.linkedin.com/in/danbrooking
                </a>
                </li>
                <li>
                  <a href='mailto:dan@danbrooking.com'>
                    <span><FontAwesome name='envelope' /></span>
                    &nbsp;&nbsp;
                    dan@danbrooking.com
                </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
