const express=require ('express');
const app = express();
const fs=require("fs")
const port =3000;


app.get('/user',function(req,res){
    fs.readFile('./data.JSON',"utf8",(err,data)=>{
        data=JSON.parse(data);
    
  
    console.log(data)
    res.send(`${data.user1.name} :${data.user2.name}`) 
    })
})
app.listen (port,()=>{
    console.log(`example app listening on port ${port}`)

});
