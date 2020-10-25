import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {Provider} from "react-redux";
import store from "./Store";

const appWithProvider = (
    <Provider store={store}>
      <App />
    </Provider>
)

ReactDOM.render(appWithProvider, document.getElementById('root'));

