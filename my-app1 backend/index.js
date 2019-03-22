const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const mongoDB = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const mongoConnect = ()=>{
    const uri = "mongodb+srv://safeervs7:safeervs7@testdata-4nmuy.mongodb.net/myapp1?retryWrites=true"
    MongoClient.connect(uri, (err, client)=> {
        if(err) {
                console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        else{
            console.log('Connected...');
        }
        this.userDB = client.db("myapp1").collection("users");
        // client.close();
        console.log('Connected2...');
        app.listen(3001);
    });
    console.log('Connected3...');
}

app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/', (req, res) =>{
    console.log("test home");
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: "My company"
    })
});

app.post('/login', (req, res) =>{
    let success = false;
    console.log("req.body:", req.body);
    let responseCall = ()=>{
        res.status(200).send({
            success: success,
            message: 'todos retrieved successfully',
            todos: "My company"
        });
     }
    this.userDB.findOne({"username": req.body.username}, function (err, info) {
        console.log("info:",info);
        if(info && Object.keys(info)[0]){
            if(info.password == req.body.password){
                success = true;
            }
        }
        responseCall();
     });
     
     
});

app.post('/register', (req, res) =>{
    console.log("test register",req.body.username, req.body.password_confirm == req.body.password);
    if(req.body.password_confirm == req.body.password){
        this.userDB.insertOne(
            { "username" : req.body.username,
              "password" : req.body.password,
            }
         )
    }
});

mongoConnect(() =>{
    app.listen(3001);
    console.log("listen");
});