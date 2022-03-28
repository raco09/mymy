var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3500, function(){
    console.log('start express server port on 3500 !!@@@@@!!!')
    });


app.use(express.static('public'))
app.use(bodyParser.urlencoded({entended:true}))

//url routing
app.get('/', function(req, res){
    // res.send("<h1>hi hello!</h1>");
    res.sendFile(__dirname + '/public/main.html')
})

app.get('/main', function(req, res){
    res.sendFile(__dirname + '/public/main.html')
})

app.post('/email_post', function(req, res){
    console.log(req.body.email)
    res.send(`<h1>welcome! ${req.body.email}!!!</h1>`)
})