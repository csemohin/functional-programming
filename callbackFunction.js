//call-back function
function resultFn(a, b, callBack){
    var m = a + b;
    var n = a - b;
    var result = callBack(m,n);
    return result;
}

//call call-back function
var multiply = resultFn(6 , 5, function(x,y){
    return x*y;
})
console.log(multiply);

//for sum
var sum = resultFn(4,5, function(x,y){
    return x+y;
})
console.log(sum);
