import React from 'react';
import PropTypes from 'prop-types';

class Flashline extends React.PureComponent {
  render() {
    return (
      <div className="flashline"><h1 id="banner">TicTacToe</h1>{ this.props.message }</div>
    );
  }
}

Flashline.propTypes = {
  message: PropTypes.string.isRequired
};

export default Flashline;
