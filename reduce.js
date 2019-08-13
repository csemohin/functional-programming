var arr1 = [1,2,3,4,5,6]
// var reduceout = arr.reduce(function(pre,acc){
//     return pre + acc;
// })
// console.log(reduceout);

// making reduce function
function myReduce(arr,cb,acc){
    for (let index = 0; index < arr.length; index++) {
        acc = cb(acc, arr[index])
    }
    return acc;
}

var result = myReduce(arr1, function(pre, init){
    return pre + init;
},0)
console.log(result);
