
import React, { useState } from 'react';
import App from '../App';
import Info from './Info';
//import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";



function Item(props){
    

  
  return(
    <Link to={`/${props.title}`}>    
    <div className="card">
      <div className="top">
        <h2 className="name">{props.title}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.price}</p>     
      </div>
    </div>
    </Link>
    );


    
}

export default Item;