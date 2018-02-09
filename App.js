import React from 'react';
import { createStore, combineReducers } from 'redux';
import CounterContainer from './containers/CounterContainer';
import { Provider } from 'react-redux';
import { counterReducer } from './reducers/counterReducer'

const store = createStore(combineReducers({count: counterReducer}));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
  }
}