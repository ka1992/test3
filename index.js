functiok
nn add(a, b, callback){
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