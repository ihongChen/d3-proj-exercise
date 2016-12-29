var express=require('express')
var app=express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//
app.use(express.static(__dirname + "/public"));


var mysql=require('mysql');

global.pool =mysql.createPool({
  connectionLimit : 10,
  host            : 'ihongchen.ctbx4pq8or72.us-west-2.rds.amazonaws.com',
  port            : '3306',
  user            : 'ehome4829',
  password        : 'a126234829',
  database        : 'test'
});

//api route

var api=require('./route/api')
app.get('/plot',api.getData);

app.listen(3000,function(){
  console.log('starting...');
})
