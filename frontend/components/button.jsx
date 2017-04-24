import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    return (
      <button onClick={this.props.onClick} className="button">
        {this.props.label}
      </button>
    );
  }
}


export default Button;
