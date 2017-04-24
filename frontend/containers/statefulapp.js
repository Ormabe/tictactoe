import { connect } from 'react-redux';
import { addMove, resetGame } from '../actions/game-action';

import TicTacToe from './tictactoe.jsx';

const getWinner = (cells) => {
  const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  let winner;

  winningStates.forEach((winningState) => {
    const potentialWinner = cells[winningState[0]];
    if (potentialWinner !== undefined) {
      let hasWonCurrentState = true;
      winningState.forEach((winningCell) => {
        if (cells[winningCell] !== potentialWinner) hasWonCurrentState = false;
      });
      if (hasWonCurrentState) winner = potentialWinner;
    }
  });
  return winner;
};

const isTie = (cells) => {
  if (getWinner(cells) !== undefined) return false;

  let isTie = true;
  cells.forEach((cell) => {
    if (cell === undefined) isTie = false;
  });
  return isTie;
};

const isValidMove = (cells, cell) => {
  if (cells[cell] !== undefined) return false;

  if (getWinner(cells) !== undefined || isTie(cells)) return false;

  return true;
};

const getStatusMessage = (cells, player) => {
  if (isTie(cells)) return 'It is a tie!';

  const winner = getWinner(cells);
  if (winner !== undefined) {
    return `${winner} has won the game!`;
  }
  return `Player ${player}`;
};

const mapStateToProps = (state) => {
  return {
    player: state.player,
    cells: state.cells,
    message: getStatusMessage(state.cells, state.player)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCell: (cell, cells, player) => {
      if (isValidMove(cells, cell)) dispatch(addMove(cell, player));
    },
    onReset: () => {
      dispatch(resetGame());
    }
  };
};

const StatefulApp = connect(mapStateToProps, mapDispatchToProps)(TicTacToe);

export default StatefulApp;
