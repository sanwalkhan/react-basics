import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


let currdate = new Date()
currdate = currdate.getHours()  
let greeting = '';

if(currdate >= 1 && currdate< 12){
  greeting = 'Good Morning'
}else if(currdate >=12 && currdate <20){
  greeting = "Good Evening"
}else{
  greeting = 'Good Night'
}

ReactDOM.render(
 <React.Fragment>
 <h1>Hello Sir, {greeting} </h1>


 </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
