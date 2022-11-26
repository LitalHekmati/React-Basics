
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FcDownLeft } from 'react-icons/fc';

function Info(props){
  
    const title = useParams().title;
    const newItem = props.list.find((item) => item.title == title);
  
    return (
    <div>
      <div className="card-info">
      <div className="top">
        <h2 className="name">{newItem.title}</h2>
        <img className="circle-img" src={newItem.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{newItem.price}</p>     
        <p className="info">{newItem.info}</p>     
        <p className="info">you can find this product at: {newItem.place}</p>     
        <img className="squre-img-info" src={newItem.img2} alt="avatar_img" />
      </div>
      <Link to="/" className="button__back">
        <FcDownLeft className="arrow" />
     </Link>
    


    
    </div>



    </div>
  );
};
  
export default Info