const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');
dotenv.config( { path: './.env' } );


//creating an express app and setting up the port



const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection ({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
})

const publicDirectory = path.join(__dirname, './public');
app.use(express.static( publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // your React frontend
    credentials: true, // allow cookies if you're using them
  }));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


db.connect(  (error) => {
     if(error){
        console.log(error); 
     }else{
        console.log("MYSQL Connected....");
     }
})


app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));



hbs.registerHelper('eq', function (a, b) {
    return a === b;
});


//starting the server port on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
})
 
