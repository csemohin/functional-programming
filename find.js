var arr = [1,2,3,4,5,6,7]
// var result = arr.find(function(value){
//   return  value === 6;
// })
// console.log(result);
//we can use findindex for get index
// implementation find methode
function myFind(anyarry,cb){
    for (let i = 0; i < anyarry.length; i++) {
        if (cb(anyarry[i])) {
            return anyarry[i]
        }
    }
}
myFind(arr, function(value){
    if (value === 6) {
        console.log(value); 
    }
})
