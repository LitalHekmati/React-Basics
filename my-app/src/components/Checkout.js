
import React, { useState } from 'react';
import {Link} from 'react-router-dom'



function Checkout(props) {
    
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');


  // function to handle changes to the input field
  const nameHandleChange = (event) => {
    // update the input state with the current value of the input field
    setName(event.target.value);
  }

  const idHandleChange = (event) => {
    // update the input state with the current value of the input field
    setId(event.target.value);
  }
  const phoneHandleChange = (event) => {
    // update the input state with the current value of the input field
    setPhone(event.target.value);
  }

  const saveToDb = (event) => {
    // update the input state with the current value of the input field

    fetch("http://localhost:3000/checkout/saveUser/"+name+"/"+id+"/"+phone)
    setName("");
    setId("");
    setPhone("");


  }

  

  return (<div>
        <link rel="stylesheet" href="Checkout.css"/>
          <input type="text" placeholder="name" value={name} onChange={nameHandleChange} />
          <input type="text" placeholder="Id" value={id} onChange={idHandleChange}/>
          <input type="text" placeholder="Phone" value={phone} onChange={phoneHandleChange} />
          <Link to={"/"}>
          <button onClick={saveToDb} type="submit">Save me</button>
          </Link>
          </div>
      );



    
}

export default Checkout;



