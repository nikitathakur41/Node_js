const express=require ('express');
const app = express();
const fs=require("fs") 
const port = 3000


app.get('/getUser',function(req,res){
    fs.readFile('./data.json','utf8',(err,data)=>{

    var users = JSON.parse(data)
    res.send(JSON.stringify(users))

});

})

app.listen(port,()=>{
    console.log(`${port}`)
})
