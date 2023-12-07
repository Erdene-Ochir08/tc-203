console.log(5+5);
console.log("snu"+" namaig Erdene-Ochir gedeg");
console.log("2 deer 2iig nembel " + (2 + 2));
// camel case 
/* var ovogNer = "Batiin Suvd-Erdene";
var nas = 25;
var isFemale = true;
console.log(ovogNer + " bol " + nas + " nastai");
console.log(ovogNer + " ub-d amidardag");
console.log("5 jiliin daraa " + (nas + 5) + " hurne");
console.log(ovogNer + " emegtei gedeg n " + isFemale); */
// Minii neriig <........> gedeg. Bi <.......> nastai.
// Bi <........> gazar surdag. Bi eregtei gedeg n <......>.
// Ta <.....> ond tursun.
var age = 23;
var on = 2023;
var tursunOn = on - age;
// tanii nas : 23
// tanii tursun on : ????
console.log("Tanii nas : " + age);
console.log("Tanii tursun on " + (tursunOn));
// comment --> uurtuu vldeeh temdeglel
// alert("utga") --> sanuulga
// console.log("utga")--> console deer hevleh func
//alert("Hi");
//alert(tursunOn);
// prompt("Asuult bichne") --> garaas utga avah func
// var age2 = +prompt("Nasaa oruulna uu?");
// var on2 = +prompt("Odoogiin on oruulna uu?");
// alert(on2-age2);
// 1. 2 тоо гараас аваад нийлбэрийг олно уу
// 2. Тэгш өнцөгтийн урт болон өндөр өгөгдсөн бол периметр /p/ болон талбайг/s/ олно уу
// 3.  
// https://www.spoj.com/RGB7/
var too = 423;
// 42.3 --> 42 % 10 --> 2
var hToo = Math.floor(too / 10) ; // 42
// Math.floor(2.3) --> 2 butarhaig bvhel too bolgoh func
var middleToo = hToo % 10; // 42 % 10 = 2
console.log(middleToo);

// 200 sec --> 1 min = 60sec 
// 200 / 60 = 3.333 min
// 200 % 60 = 20 sec

// 3612sec --> 3616/3600 -> (1.13) -> 1tsag
// 3612%3600-> 12 --> 12/60 -> (0.4) -> 0min
// 12%60 -> 12sec 

var sec = 4523
var h = Math.floor(sec/3600);
var m = Math.floor((sec%3600)/60);
var s =(sec%3600)%60;
console.log(h+"tsag "+ m+"min "+s+"sec");