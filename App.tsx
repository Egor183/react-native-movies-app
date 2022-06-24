import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@src/redux/store';
import Navigator from '@src/modules/Navigation';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
