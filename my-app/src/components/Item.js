

function Item(props){
    return(
    <div className="card">
      <div className="top">
        <h2 className="name">{props.title}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.price}</p>
        <button>View more info</button>
        
      </div>
    </div>
        
    );


    
}

export default Item;