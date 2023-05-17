var express=require ('express');
var app = express();
var fs=require("fs") ;
var cors = require('cors');
app.use(cors());

app.put('/updateUser/:id/:name',function(req,res){
    fs.readFile('./data.json','utf8',(err,data)=>{

    var users = JSON.parse(data);
    users["user"+req.params.id].name = req.params.name;
    console.log(users);
    
    fs.writeFile('./data.json',JSON.stringify(users),(err,data)=>{
        
    }) 
    res.end(JSON.stringify(users));
});


})
 var server =app.listen (8081,function(){
    var host = server.address().address;
    var port = server.address().port
    console.log("Example app listening at http://%s%s", host,port)

}); 
