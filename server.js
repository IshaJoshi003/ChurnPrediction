var express    = require('express'),
    Bourne     =    require('bourne'),
    bodyParser =    require('body-parser'),
    db         =    new Bourne('user.json'),
    crypto     =    require('crypto'),
    api        =    require('./api'),

    app        =  express();

app
   .use(express.static('./public'))
   .use(express.static('./app'))
   .use(bodyParser.json())
   .use('/api', api)
   .use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
      }))
  .get('*',function(req,res){

     res.sendFile('/app/index.html' , { root : __dirname});
       
  })

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(' listening on port',  port);
});
  

