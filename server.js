var 
    express = require('express')
    , path = require('path')
    , http = require('http')

var app = express();

app.configure(function(){
  
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/index');
  app.engine('html', require('ejs').renderFile);
  app.use(express.static(path.join(__dirname, '/')));
})

app.get('/', function(req, res) {
    
    res.render('index.html')
});



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});