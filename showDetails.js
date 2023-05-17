var express=require ('express');
var app = express();
var fs=require("fs") 
var port = 3000


app.get('/getUser/:id',function(req,res){
    fs.readFile('./data.json','utf8',(err,data)=>{

    var users = JSON.parse(data)
    
    console.log(req.params)
    var user = users ["user"+ req.params.id]
    console.log(user);
    res.send(JSON.stringify(user))

});

})
// var server =app.listen (3000,function(){
//     var host = server.address().address;
//     var port = server.address().port
//     console.log("example app listening at http://%s%s", host,port)

//}); 
app.listen(port,()=>{
    console.log(`${port}`)
})
