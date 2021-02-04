import React from "react";
import Amount from './Amount';
import Time from "./Time";
import Rate from "./Rate";
import './App.css';


function App() {
  return (
     <form action='/' method='POST'> 
      <div className='container'>
      <h1>QUICK EMI CALCULATOR</h1>
      <Amount />
      <Time />
      <Rate/>

      
      
      <div className="container2">
              <input type='Submit' id='button' />
              <input type='Reset' id='button1' />
            </div>
      
      </div>
      </form>
   
  );
}

export default App;























            
    
