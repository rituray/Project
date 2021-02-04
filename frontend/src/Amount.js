import React, { useState } from 'react';

function Amount() {
  const [userValues, setUserValues] = useState({
    amount: '',
  });

 const handleInputChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });
  
    return (
      <div className='container1'>
  
              <div className="text-align">
                <label id='label'><b>Loan Amount:</b></label>
                <input
                  type='text'
                  name='amount'
                  placeholder='Loan amount'
                  value={userValues.amount}
                 
                  onChange={handleInputChange}
                />
              </div>
              
            
              <div>
                
               
            </div>
          </div>
    
  
  );
}

export default Amount;

  