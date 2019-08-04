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
