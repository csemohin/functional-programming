//using array
var arr = [1,4,6,8,5]
arr.forEach(function(value, index, arry){
    console.log(value, index, arry);
})

//making foreach function with callback
var arr2 = [3,4,6,3,5,7,4]
function myForeach(arr, cb){
    for(var i = 0; i < arr.length; i++){
        cb(arr[i],i,arr);
    }
}
// implement callback function
myForeach(arr2, function(value, index, arry){
   console.log('value is '+ value, 'index '+ index,'Array '+arry);
})

