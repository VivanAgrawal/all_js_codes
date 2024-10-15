//to run connect this page to ab.html file

var v = "I'm global v";
var stuff = "I'm global stuff";

function fun(stuff){
    console.log(v);
    stuff = "Reassign stuff inside func";
    console.log(stuff);
}
console.log(stuff)

fun()




