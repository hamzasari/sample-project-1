import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import AppNavigator from './navigation/AppNavigator';

import Header from './components/Header';
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';

import './styles/index.sass';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <AppNavigator />
      <Footer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
