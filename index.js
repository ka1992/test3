var http = require('http');
var server = http.createServer(function(response, request){
  response.end('cookie');
});

var port = 3000;
server.listen(port, function(){
  console.log('웹서버가 켜졌습니다. : ' + port);
})

function
         add(a, b, callback){
  var result = a + b;
  callback(result);
}

add(10, 10, function(result){
  console.log('결과 값은 : ' + result);
})

function myFunc1(num, callback){
 var price = num * 1040;
 callback(price);
}

myFunc1(100, function(price){
  console.log('결과 값은 :' + price);
})

myFunc1(200, function(price){
  console.log('결과 값은 : ' + price);
})

//above callback function ate samples
//add some code
//add
//add2
//add3
//add4
