import React from 'react';
import Cell from '../components/cell';
import Button from '../components/button';
import Flashline from '../components/flashline';
import Image from '../components/image';

class TicTacToe extends React.Component {
  render() {
    const game = this;
    return (
      <div>
        <Flashline message={this.props.message} />
        <div className="grid">
          {
            this.props.cells.map((value, cell) => (
              <Cell
                key={cell} state={value} onClick={(evt) => {
                  game.props.onSetCell(cell, this.props.cells, this.props.player);
                }}
              />
            ))
          }
        </div>
        <div className="panel">
          <Button
            label="RESET" onClick={(evt) => {
              game.props.onReset();
            }}
          />
        </div>
        <footer>
          <a href="https://github.com/Ormabe/tictactoe">
            <h5 className="github">Also on Github!</h5>
            <Image />
          </a>
        </footer>
      </div>
    );
  }
}

export default TicTacToe;
