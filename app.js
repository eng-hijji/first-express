const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, "public")));
// we use the app.use as it's a middle ware not an endpoint


// the dirname is the exact path on my computer for this file and the path.join is connecting them
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'))
})
app.get('/index.html',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'))
})
app.get('/styles.css',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/styles.css'))
})
app.get('/script.js',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/script.js'))
})
app.get('/contact.html',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/contact.html'))
})
app.get('/about.html',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/about.html'))
})
app.listen((3000),()=>{
  console.log('hello')
})