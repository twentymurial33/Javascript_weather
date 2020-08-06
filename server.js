var express=require("express");
var bodyParser=require("body-parser");
var app=express();

var port =process.env.PORT||5000;

//Routes 

app.listen(port);
console.log( "getting momentum");