import { Link } from "react-router-dom";
import { chosenList } from "./Info";
import Item from "./Item"

function Cart(props) {
    

    var sum=0;

    const addList=(event)=>{
    //    //fetch("http://localhost:3000/add/"+props.chosenList)
   
    // fetch('http://localhost:3000/add', {
    //     method: 'POST',
    //     body: JSON.stringify(props.chosenList)
    //    })
    //    .then((response) => response.json())
    //    .then((json) => {
    //      // you can do what ever you want here
    //      console.log(json);
    //    })
    }

    props.chosenList.forEach(element => {
        sum=sum+element.price;
    });

    return <div>
        {props.chosenList.map((product) =>{
            return<Item title={product.title} img={product.img} price={product.price} /> 
    })};
    <h1>Total amount: {sum}$</h1>
    <Link to={"/checkout"}>
        <h1>checkout</h1>
    </Link>
    </div>
        
    
}

export default Cart;
