import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reduxStore from './store';
import StatefulApp from './containers/statefulapp';

import '../icon.ico';
import './style/style.scss';
import '../images/github.png';


ReactDOM.render(
  <Provider store={reduxStore}>
    <StatefulApp player="X" />
  </Provider>, document.getElementById('root'));
