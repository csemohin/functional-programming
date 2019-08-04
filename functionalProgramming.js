/*
function add(a,b){
    return a+b;
}
function manipolate(a,b,func){
    var c = a+b;
    var d = a-b;

    function mulifly(){
        var m = func(a,b);
        return m*c*d;
    }
    return mulifly;
}
var manipulate = manipolate(4,5,add);
console.log(manipulate());
*/
//closure
var x = 10;
function myFun(){
    console.log(x);
    var b = 4;
    return function(){
        console.log(b);
    }
}
var reslt = myFun()
console.dir(reslt);
