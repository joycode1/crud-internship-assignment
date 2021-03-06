import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk';
import reducer from '../src/store/reducer/reducer';
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
