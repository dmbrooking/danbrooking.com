import React from 'react'

export default class Quote extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        &ldquo;{this.props.quote.quote}&rdquo;
        <br />
        - {this.props.quote.attribution}
      </div>
    )
  }
}

Quote.propTypes = {
  quote: React.PropTypes.object
}
