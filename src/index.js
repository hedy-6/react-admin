import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import saga from './sagas'
import RouterApp from './router/RouterApp'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './assets/css/index.less'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga)

ReactDOM.render(<Provider store={store}><RouterApp /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();