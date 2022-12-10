
import './App.css';
import Header from './components/Header';
import List from './components/List';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Info,chosenList} from './components/Info'
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {


    var list = [
      {title: 'Banana',place:"Super YUDA", img:'https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg',img2:"https://i2-prod.mylondon.news/incoming/article23097028.ece/ALTERNATES/s1200/1_IMG_0228.jpg", price:2, info:"A banana is a curved, yellow fruit with a thick skin and soft sweet flesh."},
      {title: 'Chocolate',place:"Shefa Isashar",img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKupxLW7whEmZ38FC_U56f3bBNZXjoC6VjZA&usqp=CAU',img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucY87nnHoG9LiKSYfggennNfPM2ZUvrZAmA&usqp=CAU",price:5,info:"Chocolate is a food product made from the fruit of a cacao tree (Theobroma cacao)."},
      {title: 'Honey',place:"Osher Ad",img:'https://www.clalit.co.il/he/new_article_images/lifestyle/sweets%20and%20snacks/GettyImages-810340892/medium.jpg',img2:"https://i.insider.com/5c86b7172628980c4018f3d5?width=1136&format=jpeg", price:3,info:"Honey starts as flower nectar collected by bees, which gets broken down into simple sugars stored inside the honeycomb"}
    ];

  return (
    <>
     
     <Router>
     <Header/>
        <Routes>
          <Route path="/" element={ <List list={list}/>} />
          <Route path="/:title" element={<Info list={list}/>} />
          <Route path="/cart" element={ <Cart chosenList={chosenList}/>} />
          <Route path="/checkout" element={ <Checkout/>} />

        </Routes>
      </Router>

    </>
  
 );
}

export  {App};

