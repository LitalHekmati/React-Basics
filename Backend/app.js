
const express=require('express');
const mongoose=require('mongoose');


const app=express();



mongoose.connect('mongodb://127.0.0.1:27017/shoppingBagDB')
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })
 
const usersSchema = {
    name: String,
    Id: String,
    Phone: String
};

 const User=  mongoose.model("User",usersSchema);

app.get('/checkout/saveUser/:name/:id/:phone', async (req, res) => {
    const { name,id,phone } = req.params;
   
    const newUser =new User ({
        name: name,
        Id: id,
        Phone: phone
    });

    newUser.save();
    res.redirect("/");
    
})

app.listen(3000, () => {
    console.log("listening on port 3000!");
})

