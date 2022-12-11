const express=require('express');
const bodyParser= require('body-parser');
const mongoose=require('mongoose');



var app=express();
var cors = require('cors');
app.use(cors());




mongoose.connect('mongodb://127.0.0.1:27017/shoppingBagDB')
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })
 

const itemsSchema = {
    name: String,
    price: Number
};
    
const Item=  mongoose.model("Item",itemsSchema);


const usersSchema = {
    name: String,
    Id: String,
    Phone: String,
    Items:[itemsSchema]
};

 const User=  mongoose.model("User",usersSchema);



app.get('/checkout/saveUser/"+name+"/"+id+"/"+phone+"/list', async (req, res) => {
    const { name,id,phone } = req.params;
    const { items } = req.params;

   
    const newUser =new User ({
        name: name,
        Id: id,
        Phone: phone,
        Items: items
    });


    newUser.save();
    res.redirect("/");
    
})
app.use(express.static('public'))
app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use(express.urlencoded());
app.use(bodyParser.json())

  

app.post("/checkout", (req, res) => {
    let result = req.body.itemList

    var newItems=[]
    result.forEach(element => {
        const newItem = new Item ({
            name: element.title,
            price: element.price
        })
        newItems.push(newItem)
    });

    const newUser=new User({
        name: req.body.userData.name,
        Id: req.body.userData.id,
        Phone: req.body.userData.phone,
        Items: newItems
    })

    newUser.save();
    res.redirect("/");

    // Access the array from the object
  //  const array = data.list;
    
})



app.listen(3000, () => {
    console.log("listening on port 3000!");
})