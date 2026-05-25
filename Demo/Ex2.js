const { text } = require("express");

equation = (x) => eval(x);
txt = "1+1 7*4-2 1+1+1+1+1";

txt.split(" ").forEach((item) => {
    console.log(equation(item))
})

function twosum(a,b){
    return Number(a.join(""))+Number(b.join(""))
}

console.log("Two Sum : " , twosum([1, 2, 'a'], [3, 4]))

function test(c) {
    var a = c;
}
