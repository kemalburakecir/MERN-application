import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {configureStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = configureStore(reducers, compose(applyMiddleware(thunk)))



ReactDOM.render(<App />, document.getElementById('root'));

// we are connecting application to html file
// we gonna initialize redux 
 