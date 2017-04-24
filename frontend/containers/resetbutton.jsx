import React from 'react';
import { connect } from 'react-redux';

const resetButton = ({ dispatch }) => (
  <Button label="RESET" onClick={dispatch} />
);

connect()(resetButton);

export default resetButton;
