// function --> dahin ashiglah bolomjtoi kodnii tsugluulga
// function define
// argument/parametr -> func-iin avah utga
function start(name,age){
    console.log("Hello " + name);
    console.log("Your are " + age + " years old");
}
// function display --> neriigBichne()
start("Erdene-Ochir",23);
// 2 тооны нийлбэр олдог функц бичнэ үү
function sum(too1,too2){
    console.log(too1+ "+" + too2 + "=" + (too1+too2) );
}
sum(50,36);

// Тооны квадрат зэрэг олдог функц бичнэ үү
function zereg(too){
    console.log(too + "-iin kvadrat zereg bol " + (too*too));
}
zereg(12);
// Нас оруулахад насанд хүрсэн эсэх бас хэдэн онд төрсөнийг гаргаж ирэх функц бичнэ үү
function year(age){
    if(age>17){
        console.log("Nasand hursen");
    }else{
        console.log("Nasand hureegui");
    }
    console.log(2023-age);
}
year(25);
// backtick
var a = 5;
console.log("ene bol "+ a +" too");
console.log(`ene bol ${a} too`);
//alert("alert");
// DOM /document/ -> html deer baigaa bvh code 
console.log(document);
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
// variable.style.styleName = "styleValue"; --> tag-d style uguh
h1.style.color = "red";
// variable.innerText = "text"; --> tag dotorh text-iig uurchlunu
h1.innerText = "Test";
// define -> duudah/zarlah
var text = document.getElementsByTagName('p')[0];
var btn = document.getElementsByTagName('button')[0];
// check -> shalgah
console.log(text);
console.log(btn);
// uildel
function darah(){
    // alert("Success");
    text.innerText = "Button daragdlaa";
    text.style.color = "green";
}
// define
var inputAge = document.getElementsByTagName('input')[0];
var btnAge = document.getElementsByTagName('button')[1];
var result = document.getElementsByTagName('span')[0];
// check 
console.log(inputAge);
console.log(btnAge)
console.log(result);
// action 
function findYear(){
    // alert(inputAge.value);
    if(inputAge.value>17){
        result.innerText = "Ta nasand hursen baina";
    }else if(inputAge.value == ""){
        alert("Hooson baij bolohgui");
    }
    // string -> number 2023 - parseInt(inputAge.value)
    // NaN -> not a number
}
// 1. 110 дээш нас оруулвал улаан өнгөөр Хүн ийм наслах боломжгүй
// 2. 0-ээс бага тоо оруулвал шар өнгөөр Та төрөөгүй байна
// 3. Хоосон үед alert() гарж ирнэ 
// 4. 10 жилийн дараах насыг гаргаж ирэх
// 5. Төрсөн оныг гаргаж ирэх