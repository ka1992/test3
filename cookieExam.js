var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200, {
    'Set-Cookie':['chco'='item1', 'macchco'='item2'];
  });
  res.write('<h1>cookie 생성</h1>');
  res.end();
});
var port = 3000;
server.listen(port, function(){
  console.log('웹서버가 켜졌습니다. : ' + port);
})