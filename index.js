const express = require('express')
const app = express()


const mongoose = require('mongoose');
mongoose.connect();

const config=require('./config/database')
const path =require('path');


mongoose.Promise=global.Promise;


mongoose.connect(config.uri,{
  useNewUrlParser: true, useUnifiedTopology: true
},(err)=> {

if (err) {
 

  console.log("could not connect to db", err);

}
else {

  console.log("connected to db", config.db);
  console.log( config.secret);

}

});

app.use(express.static(__dirname+'/client/dist/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/dist/index.html'));
})

/*
app.get('*', (req, res) => {
  res.send('<h1> SO IT IS ON  from c drive</h1>')
})
*/
app.listen(8080, () => {
  console.log('Example app listening at 8080')
})
