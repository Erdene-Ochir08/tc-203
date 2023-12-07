// massive/array -> olon utga zereg hadgalah
var a =5;
// [] -> massive/array
// var massviveName = ['string','number','null','boolean'];
var too = [50,4,2,3,10];
console.log(too);
// index --> element-iin ezleh bairiin dugaar --> index 0-ees ehelne
// length --> massive-iin elementiin too
console.log(too[0]);
console.log(too[4]);
too[5]=6;
too[0]=0;
console.log(too);
console.log(too[0]);
// food massive/array uusgeed 3 durtai hooloo hadgalaad tus bvrd hevlej gargaj irne uu
var test = ["text",true,50,null];
console.log(test);

// for -> massive
console.log(too[too.length-1]);
for(var i=0;i<=too.length-1;i++){
    console.log(too[i]);
}
// i=0 -> 0<=5 -> too[0] = 0 -> i++
// i=1 -> 1<=5 -> too[1] = 4 -> i++
// 1. 5 ширхэг тоо агуулсан массив үүсгээд эхний болон сүүлийн тооны үржвэрийг олно уу
// 2. 10 ширхэг тоо агуулсан массив үүсгээд тэдгээрийн нийлбэр, үржвэрийг олно уу
// 3. 5 ширхэг тоо агуулсан массив үүсгээд тэгш бол тэгш сондгой бол сондгой тоо гэж гаргаж ирнэ үү
// first -> too[0]
// last ->  too[too.length-1]
var number = [5,6,8,93,100];
console.log(number[0]+number[number.length-1]);
var sum = 0;
var vrjver = 1;
for(var i=0;i<=number.length-1;i++){
    sum = sum + number[i];
    vrjver = vrjver * number[i];
}
console.log(sum);
console.log(vrjver);

var num =[3,2,10,7,8]
for(var i=0;i<=num.length-1;i++){
    if(num[i]%2==0){
    console.log(num[i]+" tegsh too")
    }else if(num[i]%2!=0){
        console.log(num[i]+" sondgoi too")
    }
}
var color = ['aqua','blue','green','red','yellow'];
var body = document.getElementsByTagName('body')[0];
var btn = document.getElementsByTagName('button')[0];
console.log(body);
function changeColor(){
    i++;
    if(i>color.length-1){
        i=0;
    }
    body.style.backgroundColor = color[i];
    btn.innerText = color[i];
}
// indexOf -> utga heddeh index deer baigaag gargaj irne
// typeOf -> utga yamar ugugdliin turulteig gargaj irne /string,boolean, number, null/
var a = 5;
console.log(typeof(a));
var d = [5,3,6,5];
console.log(d.indexOf(3));
var bln = [true,false,true,false,false,true];
// 1. Дараах массивт хэдэн true,false байгааг шалгах код бичнэ үү
// Үр дүн : false : 3
//          true : 3

// 