import React from 'react'

export default class Jumbotron extends React.Component {
  render() {
    return (
      <div className='background-white'>
        <div id='profile' className='container'>
          <h2>Profile</h2>
          <p className='lead'>I&#039;m a creative, independent Ruby on Rails, Javascript full stack webdeveloper</p>
          <hr />
          <div className='row'>
            <div className='col-md-4'>
              <h3>About me</h3>
              <p>I am a full stack web developer who enjoys all aspects of the process, from cradle to grave.  I am a senior programmer who lives for structure and quality in the code.  I constantly look for ways to go back and improve upon work that has been done, striving the create the best end product possible.</p>
            </div>
            <div className='col-md-4 text-center'>
              <img src='/images/dan_brooking.png' alt='Dan Brooking' width='246' height='246' />
            </div>
            <div className='col-md-4'>
              <h3>Details</h3>
              <p>
                <strong>Name:</strong><br />Dan Brooking<br />
                <strong>Age:</strong><br />38 years<br />
                <strong>Location:</strong><br />Keyport, NJ; Remote
              </p>
              <a href='https://twitter.com/dbrooking' className='twitter-follow-button' data-show-count='false' data-size='large' data-show-screen-name='false'>Follow @dbrooking</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}