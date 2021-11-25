const express = require('express');
const app = express();

//path
const path = require('path');


//pongo una carpeta estatica publica, la carpeta "public"
app.use(express.static('public'));


//corro el servidor
app.listen(process.env.PORT || 3000,()=>console.log("Servidor corriendo"));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/home.html');
});
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/views/register.html');
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html');
});

