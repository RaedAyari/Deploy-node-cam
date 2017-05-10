//application hello
var express = require("express");
var app =new express();
var http= require ("http").Server(app);
var io = require("socket.io")(http);
//var server  = app.listen(3000);
///var io      = require('socket.io').listen(server);

var log=require('log');
log=new log('debug');

var port = process.env.PORT|| 3000;

app.use(express.static(__dirname+"/"));

app.get('/',function(req,res){
  res.redirect('index.html');
});

io.on('connection', function(socket){
  socket.on('stream',function (image){
    socket.broadcast.emit('stream',image);
  });
});
http.listen(port,function(){
  log.info(" listenon on port %s",port);

});
