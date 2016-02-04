import React from 'react'
import Firebase from 'firebase'
import _ from 'lodash'

import Tool from './Tool'

export default class AbilityList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tools: []
    }

    this.firebaseToolsRef = new Firebase('https://danbrooking.firebaseio.com/tools')
    this.firebaseToolsRef.once('value', (dataSnapshot) => {
      var tools = dataSnapshot.val()
      this.setState({
        tools: tools
      })
    })
  }

  render () {
    var toolNodes = _.values(this.state.tools).map((tool, i) => {
      return (
        <Tool tool={tool} key={i} />
      )
    })

    return (
      <div className='background-white'>
        <div id='abilities' className='container'>
          <h2>Abilities</h2>
          <p className='lead'>
            &ldquo;Life without knowledge is death in disguise.&rdquo;<br/>- Talib Kweli
          </p>
          <hr />
          <h3>Skills</h3>
            <div className='row'>
              <div className='col-md-6'>
                <ul className='no-bullets'>
                  <li>
                    <span className='ability-title'>CSS(3)</span>
                    <span className='ability-score'>
                      <span className='glyphicon glyphicon-star filled'></span>
                      <span className='glyphicon glyphicon-star filled'></span>
                      <span className='glyphicon glyphicon-star filled'></span>
                      <span className='glyphicon glyphicon-star filled'></span>
                      <span className='glyphicon glyphicon-star filled'></span>
                    </span>
                  </li>
                  <li>
    <span className='ability-title'>HTML(5)</span>
    <span className='ability-score'>
    <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>JSON</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>MySQL</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>PHP</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>XML</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Bootstrap Framework</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Builder Pattern</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Command line</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>JQuery</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Java</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Javascript</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>LESS</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
</ul>
</div>
<div className='col-md-6'>
<ul className='no-bullets'>
  <li>
    <span className='ability-title'>Laravel Framework</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>MVC Pattern</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Method Factory Pattern</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Object Orientated Programming</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>SASS</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>SEO</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Singleton Pattern</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>UML</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Wordpress</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>BEM</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>AngularJS</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
      <span className='glyphicon glyphicon-star '></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>ElasticSearch</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
      <span className='glyphicon glyphicon-star '></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
  <li>
    <span className='ability-title'>Ruby</span>
    <span className='ability-score'>
      <span className='glyphicon glyphicon-star filled'></span>
      <span className='glyphicon glyphicon-star '></span>
      <span className='glyphicon glyphicon-star '></span>
      <span className='glyphicon glyphicon-star '></span>
      <span className='glyphicon glyphicon-star '></span>
    </span>
  </li>
</ul>
</div>
</div>
<div className='text-center project-referal'>
<p>This project is build on a custom made PHP framework.</p>
<a href='https://github.com/pascalvgemert/resume' className='btn btn-primary' target='_blank'>See project on Github</a>
</div>
<hr />
<h3>Tools</h3>
<div className='row'>
<div className='col-md-6'>
<ul className='no-bullets'>
  {toolNodes.slice(0, 8)}
</ul>
</div>
<div className='col-md-6'>
<ul className='no-bullets'>
  {toolNodes.slice(8, 16)}
</ul>
</div>
</div>			</div>
</div>
)
  }
}
