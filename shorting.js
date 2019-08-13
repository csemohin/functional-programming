var arr = [1,2,3,4,5,6,6];
//filter function
// var srt = arr.filter(el => {
//     return el % 2 ===0;     //return always true or false
// })
// console.log(srt);


// make a filter function
function myFilter(anyArr,cb){
    var newArr = [];
    for(var i = 0; i < anyArr.length; i++){
        if( cb(anyArr[i], i, anyArr)){
            newArr.push(anyArr[i])
        }
    }
    return newArr;
}

console.log(myFilter(arr, function(el){
    return el % 2 === 1;
}));

function delFilter(arrr, cb){
    var newA = []
    for(var i = 0; i < arrr.length; i++){
        if(cb(arrr[i])){
            newA.push(arrr[i])
        }
    }
    return newA;
}
delFilter(arr, function(el){
    console.log(el);
    
})
