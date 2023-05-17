var express=require ('express');
var app = express();
var fs=require("fs") ;
var cors = require('cors');
app.use(cors());

app.put('/updateUser/:id/:Profession',function(req,res){
    fs.readFile('./data.json','utf8',function(err,data){

    var users = JSON.parse(data);
    let userId = req.params.id;
    let userProfession = req.params.Profession;
    for(const i in users)
    // console.log("users,[id]",users[id])
    // console.log("userId",userId)
    {
        if(users[i].id === parseInt(userId)){
        users[i].Profession = userProfession;
        console.log(users);
        res.end(JSON.stringify(users))
            console.log("userId1",userId);
        }
    }
    // users["user"+req.params.id].Profession = req.params.name;
    // console.log(users);
    // res.end(JSON.stringify(users));

});

})
 var server =app.listen (8081,function(){
    var host = server.address().address;
    var port = server.address().port
    console.log("Example app listening at http://%s%s", host,port)

}); 
