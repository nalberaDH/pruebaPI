const express = require('express');


const app = express();

app.get('/saludito',(req,res)=> {
    res.send('Hola');
})
app.get('/despedida',(req,res)=> {
    res.send('chau');
})

app.listen(3001,()=>console.log('Servidor funcionando'));