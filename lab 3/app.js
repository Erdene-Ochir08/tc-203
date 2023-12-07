// switch -> nuhtsul shalgah func
// A,B,C,D,F
// A,B -> Sain baina, C Dahiad jaahan hicheegerei, D , F 
var day = 10;
switch(day){
    case 7:
        console.log("Sunday");
        console.log("Butensain");
        break;
    case 1:
        console.log("Monday");
        console.log("Davaa garig");
        break;
    default:
        console.log("Not found/Iim udur baihgui");
        break;
}
var word = "Hello";
switch(word){
    case "Hello":
        console.log("Bonjour");
        console.log("Сайн уу");
        console.log("Привет");
        break;
    default:
        console.log("Not found");
}
// A,B -> Sain baina, C Dahiad jaahan hicheegerei, D , F 
var score = "A";
switch(score){
    case "A":
    case "a":
    case "B":
    case "b":
        console.log("Sain bna");
        break;
    case "C":
        console.log("Hicheegeerei");
        break;
    default:
        console.log("Tiim dun baihgui");
        break;
}
// Гараас 1. Эхний тоо 2. Тэмдэгт / -,+,*,/ / 3. 2дахь тоог авна
// Үр дүн alert(): 5 * 2 = 7
// var too1 = +prompt("Too1 oruulna uu");
// var temdegt = prompt("Temdegt oruulna uu +,-,*,/");
// var too2 = +prompt("Too2 oruulna uu");
// switch(temdegt){
//     case "+":
//         alert(too1 + "+" + too2 + "=" + (too1+too2));
//         break;
//     case "-":
//         alert(too1 + "-" + too2 + "=" + (too1-too2));
//         break;
//     case "*":
//         alert(too1 + "*" + too2 + "=" + (too1*too2));
//         break;
//     case "/":
//         alert(too1 + "/" + too2 + "=" + (too1/too2));
//         break;
//     default:
//         alert("Buruu temdegt oruulsan bna. zuvhun +-*/ bna");
// }

alert("Togloom tavtai moril. Ta toglohod belen uu");
alert("Ta oid serlee. Endees gertee harih zamaa olno uu");
var choice = prompt("Tanii zamd salaa zam garj irlee. Ali zamaar ywah ve? baruun/zuun");
if(choice=="baruun"){
    alert("Baavgai taarlaa");
    var choice2 = prompt("Ta zugtahuu esvel alah uu? zugtah/alah");
    if(choice2=="alah"){
        alert("Ta vheed. Hojigdloo");
    }else if(choice2=="zugtah"){

    }
}else if("zuun"){

}
// if --> nuhtsul
// if,else
var age = 18;
// <, >, <=, >=, ==, !=
if(age<=17){
    alert("Ta nasand hureegui bna");
}else{
    alert("Ta nasand hursen bna");
}
if(age<6){
    alert("Tsetserlegiin nas");
}else if(age<11){
    alert("Baga angi");
}else if(age<15){
    alert("dund angi");
}else if(age<19){
    alert("ahlah angi");
}else{
    alert("Wrong age");
}
// a,b 2 тооны их бага-ийг олно уу
//Гараас тоо оруулахад эерэг тоо эсвэл сөрөг тоо эсэхийг шалгах код бичнэ үү 
// Тоог сондгой тоо эсвэл тэгш тоо эсэхийг шалгана уу
var number = 35;
if(number%2==0){
    console.log("Tegsh");
}else{
    console.log("Sondgoi");
}
// Too 5 esvel 7 esvel 3 zereg huvaagdah eseh?
// and && - bas, bolon
// or || - esvel
if(number%5==0 || number%7==0 || number%3==0){
    console.log("5 bolon 7 zereg huvaagdana");
}else{
    console.log('Zereg huvaagdahgui');
}