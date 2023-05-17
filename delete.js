var express=require ('express');
var app = express();
var fs=require("fs") 
var port = 3000


app.delete('/delete/:id',function(req,res){ 
    var id =req.params.id;
    fs.readFile('./data.json','utf8',(err,data)=>{

    data = JSON.parse(data)
    
    delete data ["user"+ id]
    
    console.log(JSON.stringify(data)) 
    res.status(200)
    return res.send("removed") 


});

})

app.listen(port,()=>{
    console.log(`${port}`)
})
