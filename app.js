const express=require('express');
const expressLayouts=require('express-ejs-layouts');
//Help when creating layout using ejs

const fileUpload=require('express-fileupload');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const flash=require('connect-flash');

const app=express();
require('dotenv').config();
const port=3000||process.env.PORT;


app.use(express.urlencoded({extended:true}));
//Allow us to pass url-encoded bodies

//static folder
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout','./layouts/main');
app.set('view engine','ejs');

//Routes
const routes=require('./server/routes/recipeRoutes.js');
app.use('/',routes);

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});