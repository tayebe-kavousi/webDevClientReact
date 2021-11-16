import React, { Component } from "react";
import Main from "./components/Main";
import {BrowserRouter}  from "react-router-dom";
import "./css/App.css";
import {Provider} from "react-redux";
import widgetReducer from './reducers/widgetReducer';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(widgetReducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));



class App extends Component {
  render(){
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;