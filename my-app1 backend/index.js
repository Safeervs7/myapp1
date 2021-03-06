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
        console.log('Collected...');
        app.listen(3001);
    });
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/', (req, res) =>{
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: "My company"
    })
});

app.post('/login', (req, res) =>{
    let success = false;
    var body = JSON.parse( Object.keys(req.body)[0]);
    let responseCall = ()=>{
        res.status(200).send({
            success: "success",
            login: success
        });
     }
    this.userDB.findOne({"username": body.username}, function (err, info) {
        if(info && Object.keys(info)[0]){
            if(info.password == body.password){
                success = true;
            }
        }
        responseCall();
     });
     
     
}); 

app.post('/register', (req, res) =>{
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
});