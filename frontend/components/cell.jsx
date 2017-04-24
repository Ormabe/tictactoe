import React from 'react';

class Cell extends React.PureComponent {
  render() {
    return (
      <div onClick={this.props.onClick} className="cell">{ this.props.state }</div>
    );
  }
}


export default Cell;
