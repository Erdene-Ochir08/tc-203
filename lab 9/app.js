// es6 nemelt
// variable -> es5 -> var a=6;
// variable -> es6 -> let,const -> syntax 
var a=5;
var a="text";
console.log(a);
let b=5;
let txt="text";
// scope 
function num(){
    let too=5;
    console.log(too);
}
// const -> togtmol utga -> dom
const pi = 3.14;

// es5 function
function sum(a,b){
    console.log(a+b);
}
// es6 function -> arrow func/shugaman func
const sum2 = (a,b) => console.log(a+b);
sum(10,20);
sum2(5,10);

// massive 
let item = ["sword","gun","axe"];
// massiveName.push(value) -> hamgiin ard tald value/utga nemeh
// massiveName.pop() -> hamgiin ard taliin value/utga ustgah
// massiveName.shift() -> hamgiin urd taliin value/utga ustgah
// massiveName.unshift(value) -> hamgiin urd tald value/utga nemeh
console.log(item);
item.push("shield");
console.log(item);
item.pop();
console.log(item);
item.shift();
console.log(item);
item.unshift("helmet");
console.log(item);
// slice -> хуваах , splice
// massiveName.slice(start,end);
// shine massive ruu copy hiij avdag
let copyItem = item.slice(0,2);
console.log(copyItem);
let fruits = ["apple","banana","cherry","tomato"];
console.log(fruits);
// splice(start,deleteNumber);
fruits.splice(2,1);
console.log(fruits);
fruits.splice(0,1);
// splice(start,0,addValue);
let months = ["Jan","March","April","June"];
console.log(months);
months.splice(1,0,"Feb");
console.log(months);
months.splice(4,1,"May","June","July","Aug");
console.log(months);
// .slice(-1,-2);
console.log(months.slice(-2));
console.log(months);
console.log(months.slice(-5,-3));
// define
const slider = document.getElementsByTagName('span')[0];
// check
let value = [1,2,3,4,5];
let i=-1;
function next(){
    i++;
    if(i>value.length-1){
        i=0;
    }
    slider.innerText = value[i];
    document.getElementsByTagName('img')[0].src="";
}
function prev(){
    i--;
    if(i<0){
        i=value.length-1;
    }
    slider.innerText = value[i];
}
let time;
function auto(){
    i++;
    if(i>value.length-1){
        i=0;
    }
    slider.innerText = value[i];
    time = setTimeout(auto,2000);
    document.querySelector('.auto').disabled = true;
    document.querySelector('.stop').disabled = false;
}
function stop(){
    // clearTimeOut
    clearTimeout(time);
    document.querySelector('.auto').disabled = false;
    document.querySelector('.stop').disabled = true;
}
// setTimeout() -> func-iig heden millisecond-iin daraa ajillahiig zaaj ugnu  / millisecond 1000ms == 1s /
function hello(){
    console.log("hello");
}
setTimeout(hello,2000);
