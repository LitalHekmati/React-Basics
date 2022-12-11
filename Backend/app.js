
const express=require('express');
const bodyParser= require('body-parser');
const mongoose=require('mongoose');


const app=express();



mongoose.connect('mongodb://127.0.0.1:27017/shoppingBagDB')
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })
 

const itemsSchema = {
    name: String,
    price: String
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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Content-Type,application/json");
    next();
  });
  

app.post("/checkout", (req, res) => {
    console.log(req.body);

    // Access the array from the object
  //  const array = data.list;
    
})



app.listen(3000, () => {
    console.log("listening on port 3000!");
})

