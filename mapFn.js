//map function
var arr = [1,2,3]
// var r = arr.map(function(value){
//     return value*3; 
// })
// console.log(arr);
// console.log(r);


// making map function with callback
function myMap(anyArr,cb){
    var newArr = [];
    for(var i = 0; i < anyArr.length; i++){
        var temp = cb(anyArr[i], i, anyArr)
        newArr.push(temp)
    }
    return newArr;
}
myMap(arr, function(value){
    console.log(value+3);   
})
