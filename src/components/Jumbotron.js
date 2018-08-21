import React from 'react';

const Jumbotron = () => (
  <div id='top' className='jumbotron' data-position='center right'>
    <div className='container'>
      <h1 className='headline'>Dan Brooking</h1>
    </div>

    <div className='overlay'></div>

    <a href='#profile' className='scroll-down'>
      <span className='glyphicon glyphicon-chevron-down'></span>
    </a>
  </div>
);

export default Jumbotron;