import { ADD_MOVE, RESET } from '../actions/game-action';

const cells = (state = [undefined, undefined,
  undefined, undefined, undefined, undefined,
  undefined, undefined, undefined], action) => {
  switch (action.type) {
    case ADD_MOVE:
      return state.map((item, cell) => cell === action.cell ? action.player : item);
    case RESET:
      return [undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined];
    default:
      return state;
  }
};

export default cells;
