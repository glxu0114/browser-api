var express = require('express');
var path = require('path');
var app = express();
app.set( 'port', process.env.PORT || 8080 );

app.get(['/api/whoami/', '/',], function (req, res) {
  
  //IP address
  var ip = req.headers["X-Forwarded-For"]
           || req.headers["x-forwarded-for"]
           || req.client.remoteAddress;
         
  //Browser language
  var language = req.headers["accept-language"].split(",");
  
  //Browser OS
  var agent = req.headers['user-agent'].split(/[\(\)]+/);
  
  var result = {"IP Address" : ip,
                "Language" : language[0],
                "Browser Operating System" : agent[1],
  }
  
  res.send(JSON.stringify(result));
})

app.listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});