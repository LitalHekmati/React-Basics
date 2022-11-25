
import './App.css';
import Header from './components/Header';
import List from './components/List';


function App() {

    var list = [
      {title: 'Banana', img:'https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg', price:"Price: 2$"},
      {title: 'Chocolate',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKupxLW7whEmZ38FC_U56f3bBNZXjoC6VjZA&usqp=CAU', price:"Price: 5$"},
      {title: 'Honey',img:'https://www.clalit.co.il/he/new_article_images/lifestyle/sweets%20and%20snacks/GettyImages-810340892/medium.jpg', price:"Price: 3$"}
    ];

  return ( <div>

  
  
     <Header/>

     <List list={list}/>

   
     
  </div>


  );
}

export default App;
