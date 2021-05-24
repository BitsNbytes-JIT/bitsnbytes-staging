import React from 'react';
import ReactDOM from 'react-dom';
// import '../src/assets/scss/index.scss';
import Index from './views/Index';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import register from './components/register.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route path="/" exact={true} component={Index}/>
    <Route path="/register" exact={true} component={register}/>


    </BrowserRouter>
        
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
