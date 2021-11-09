import React from 'react';
import ReactDOM from 'react-dom';
// import { Routers } from 'react-router'
import { HashRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
