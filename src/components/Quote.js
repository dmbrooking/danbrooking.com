import React from 'react';

export default class Quote extends React.Component {
  render() {
    return (
      <div>
        <p className='lead'>
          &ldquo;{this.props.quote.quote}&rdquo;
          <br />
          - {this.props.quote.attribution}
        </p>
      </div>
    )
  }
};