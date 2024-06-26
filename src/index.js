import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chapter_04/Clock';

import Library from './chapter_03/Library';

setInterval(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  )
})

// ReactDOM.render(
//   <React.StrictMode>

//     <Library/>

//   </React.StrictMode>,
//   document.getElementById('root')
// );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
