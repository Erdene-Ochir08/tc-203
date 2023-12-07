//console.log("test");
// if condition --> nuhtsul shalgah 
// if,else -> 2 shirher nuhtsul
// if, else if, else if, .... else
var nas = 16;
// > , < , ==, !=, >=, <= 
if(nas>=18){
    console.log("nasand hursen bna");
}else{
    console.log("nasand hureegui bna");
}
// a,b 2 тооны их бага-ийг олно уу
//Гараас тоо оруулахад эерэг тоо эсвэл сөрөг тоо эсэхийг шалгах код бичнэ үү 
// Тоог сондгой тоо эсвэл тэгш тоо эсэхийг шалгана уу
var num = -5;
if(num>0){
    console.log(num + " bol eyreg too");
}else{
    console.log(num + " bol surug too");
}
var num2 = 16;
if(num2%2==0){
    console.log(num2 + " bol tegsh too");
}else{
    console.log(num2 + " bol sondgoi too");
}

var tsag = -5;
// AND -> && bas bolon
// OR -> || esvel
if(tsag<12 && tsag>6){
    console.log("ugluunii mend");
}else if(tsag>12 && tsag<18){
    console.log("udriin mend");
}else if(tsag<24){
    console.log("oroin mend");
}else if(tsag>24){
    console.log("tiim tsag baihgui bna");
}else if(tsag<0){
    console.log("tiim tsag baihgui bna");
}else{
    console.log("zuvhun too oruulna uu");
}
var number = 35;
if(number%5==0 || number%7==0){
    console.log("Ali negend n huvaagdana");
}else{
    console.log("Alind n ch huvaagdahgui");
}
// Гараас дүн /0-100/ оруулахад A B C D F гэсэн харгалзах үнэлгээг гаргаж ирнэ үү Жишээ нь 100-90 A, 90-80 B, 80-70C, 70-60 D, 60>F
// 3 тооны их бага-ыг олно уу
// 5 -2 -6 3 гэсэн тоонуудаас зөвхөн эерэг тоонуудын нийлбэрийг олно уу 

var dun = 78;
if(dun<=100 && dun>=90){
    console.log(dun + " bol A");
}else if(dun<90 && dun>=80){
    console.log(dun + " bol B");
}else if(dun<80 && dun>=70){
    console.log(dun + " bol C");
}

// 5 -2 -6 3 гэсэн тоонуудаас зөвхөн эерэг тоонуудын нийлбэрийг олно уу 
var a=-5, b=-2, c=-6, d=3;
if(a<=0){
    a = 0;
}else{
    a=a;
}
if(b<=0){
    b = 0;
}else{
    b=b;
}
if(c<=0){
    c = 0;
}else{
    c=c;
}
if(d<=0){
    d = 0;
}else{
    d=d;
}
console.log(a+b+c+d);
