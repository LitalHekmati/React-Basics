
import './App.css';
import Item from "./components/Item"


function App() {
  

    var list = [
      {title: 'Banana', price:20},
      {title: 'Chocolate', price:50},
      {title: 'Honey', price:10}
    ];

  return ( <div>

  
  
      <h2>This is our Grocery shop!</h2>

     
      <Item title={list[0].title} price={list[0].price} />

      <Item title={list[1].title} price={list[1].price} />

      <Item title={list[2].title} price={list[2].price} />
 
  </div>


  );
}

export default App;
