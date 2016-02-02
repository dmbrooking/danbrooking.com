import React from 'react'

export default class Jumbotron extends React.Component {
  render () {
    return (
      <div className="background-white">
        <div id="profile" className="container">
          <h2>Profile</h2>
          <p className="lead">I&#039;m a creative PHP webdeveloper</p>

          <hr />

          <div className="row">
            <div className="col-md-4">
              <h3>About me</h3>
              <p>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and more. As the saying goes: 'two heads are better than one'.		</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="/view/images/pascal_van_gemert.png" alt="Pascal van Gemert" width="246" height="246" />
            </div>
            <div className="col-md-4">
              <h3>Details</h3>
              <p>
                <strong>Name:</strong><br />
                Pascal  van Gemert<br />
                <strong>Age:</strong><br />
                29 years<br />
                <strong>Location:</strong><br />
                's-Hertogenbosch, The Netherlands, Earth
              </p>

              <a href="https://twitter.com/pascalvgemert" className="twitter-follow-button" data-show-count="false" data-size="large" data-show-screen-name="false">Follow @pascalvgemert</a>              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
