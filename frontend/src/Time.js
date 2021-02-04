import React, { useState } from 'react';

function Time() {
  const [userValues, setUserValues] = useState({
    interest:'',
    years: '',
  });

 const handleInputChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });
  
    return (
        <div className='container1'>
         <div>
<label id='label' ><b>Loan Period:</b></label>
<input
  type='text'
  name='years'
  placeholder='Years to repay'
  value={userValues.years}
  onChange={handleInputChange}
/>
<div className="cont_items">
<label id='label'><b>Interest Rate:</b></label>
                <input
                  type='text'
                  name='interest'
                  placeholder='Interest'
                  value={userValues.interest}
                  onChange={handleInputChange}
                />
                </div>
              
   


  
</div>

             
</div>


    );
}
export default Time;