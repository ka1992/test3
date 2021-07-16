var http = require('http');
var server = http.createServer(function(response, request){
  response.end('cookie');
});

var port = 3000;
server.listen(port, function(){
  console.log('웹서버가 켜졌습니다. : ' + port);
})