var http = require('http');
var server = http.createServer();

var port = 3000;
server.listen(port, function(){
  console.log('웹서버가 켜졌습니다. : ' + port);
});

server.on('connection', function(socket){
  console.log('클라이언트가 접속했습니다.');
});

server.on('request', function(req, res){
  console.log('클라이언트 요청이 들어 왔습니다.');
  res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
  res.write("<h1>응답</h1>");
  res.end();
});