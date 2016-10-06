var express = require('express');
var path = require('path');
var utils = require('./utils');
var port = process.env.PORT || 8080;
var app = express();


app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname + '/index.html'), function(err){
    if(err){
      res.status(500).send(err);
    }
  });
})

app.get('/:timestamp', function(req, res, next){

  var jsonToSend = { unix: null, natural: null };

  var incomingTimeStamp = req.params.timestamp;

  if(req.url === '/favicon.ico'){
    res.end();
    return;
  }

  if(/^[1-9][0-9]*$/.test(incomingTimeStamp)) {
    var ts = new Date(incomingTimeStamp * 1000);
    jsonToSend.unix = incomingTimeStamp;
    jsonToSend.natural = utils.dateToFormattedStringUTC(ts);
  } else {
    var incomingDate = new Date(incomingTimeStamp);
    if(!isNaN(Date.parse(incomingDate))){
      jsonToSend.natural = utils.dateToFormattedStringUTC(incomingTimeStamp);
      jsonToSend.unix = utils.dateStringToUTCtimestamp(incomingDate);
    }
  }
  res.send(jsonToSend);
});

app.listen(port, function(){
  console.log('listing on port ' + port);
});
