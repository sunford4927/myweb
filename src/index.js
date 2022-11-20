import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// (function buttonbox(){
//   return (
//     <div>
//   <h3>count: {this.state.count}</h3>
//   <button onClick={this.add}>+</button>
//   <button onClick={this.minus}>-</button>
//   </div>
// )})()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
