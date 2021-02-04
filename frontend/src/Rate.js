import React, { useState } from 'react';

function Rate() {
    const [userValues, setUserValues] = useState({
        charges: '',
    });

    const handleInputChange = (event) =>
        setUserValues({...userValues, [event.target.name]: event.target.value });

    return ( <
        div className = 'container1' >
        <
        div >
        <
        label id = 'label' > < b > EMI starts from: < /b></label >
        <
        select className = "options" >
        <
        option value = "grapefruit" > Grapefruit < /option> <
        option value = "lime" > Lime < /option> <
        option selected value = "At the time of loan distribution" > At the time of loan distribution < /option> <
        option value = "mango" > Mango < /option> <
        /select>

        <
        div className = "cont_items" >
        <
        label id = 'label' > < b > Upfront Charges: < /b></label >
        <
        input className = "charge"
        type = 'text'
        name = 'charges'
        placeholder = 'charges'
        value = { userValues.charges }
        onChange = { handleInputChange }
        /> <
        /div>

        <
        /div> <
        /div>

    );
}

export default Rate;