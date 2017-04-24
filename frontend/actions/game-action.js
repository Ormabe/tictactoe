export const ADD_MOVE = 'ADD_MOVE';
export const RESET = 'RESET';

export const addMove = (cell, player) => {
  return {
    type: ADD_MOVE,
    cell,
    player
  };
};

export const resetGame = () => {
  return {
    type: RESET
  };
};
