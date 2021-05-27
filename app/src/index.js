import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/core/styles";

import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers/index"
import {theme} from "./theme"
import App from './App';
import "./index.css"

const myLoggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log({message: "jai middleware ran", action: action})
      return next(action)
    }
  }
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, myLoggerMiddleware)))


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

