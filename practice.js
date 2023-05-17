const express=require ('express');
const app = express();
const fs=require("fs")
const port =3000;

app.get('/user',(req,res)=>{
    //console.log("name")
    res.send('hello')
})
app.listen (port,()=>{
    console.log(`example app listening on port ${port}`)

});
