const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

//load enviroment
dotenv.config();

const db = require("./toy-shop/modules/toys/db");

const app = express();

const port = process.env.PORT || 8888;


app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",async (req,res) =>{
  
  const toys =await db.getToys();
  res.render("index",{toys});
})

app.listen(port, ()=> {
  console.log(`Server running on http://localhost:${port}`);
})


