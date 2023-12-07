// for loop -> davtalt 
// ()-> dotor davtah nuhtsul
// for(var i=ehleh_too; i<=tugsgul_too; i++/i--){
// end davtah code bna
// }
for(var i=3;i<=5;i++){
    console.log(i+".Hello");
}
// i=1 -> 1<=10 -> true -> 1.Hello i++ 2
// i=2 -> 2<=10 -> true -> 2.Hello i++ 3
// i=3 -> 3<=10 -> true -> 3.Hello i++ 4
// i=11 -> 11<=10 -> false -> stop
for(var i=10; i>=1;i--){
    console.log(i);
}
// i=10; 10>=1 -> true -> 10 i-- 9
// i=0; 0>=1 -> false -> stop

// 1. 1-20 hurtelh zuvhun tegsh toog hevle -> 2,4,6,8,10,12,14,16,18,20
for(var i=1;i<=20;i++){
    // i=1 ? 
    if(i%2==0){
        console.log(i+":tegsh");
    }else{
        console.log(i+":sondgoi")
    }
}
// 1:sondgoi
// 2:tegsh
var niilber=0;
for(var i=1;i<11;i++){
    niilber = niilber + i;
}
console.log(niilber);
// i=1 -> 1<11 true -> 0 = 0 + 1 -> 1 
// i=2 -> 2<11 true -> 1 = 1 + 2 -> 3 
// 3. 1-10 toonii vrjveriig ol

// 10-iin hurd hevleh programm bichne uu
// 1 X 10 = 10 
// 2 X 10 = 20
for(var i=1;i<=10;i++){
    console.log(i + "X" + 10 + "=" + (10*i));
}
// define
var input = document.getElementsByTagName('input')[0];
var result = document.querySelector(".result");
var fact=1;
// check
console.log(input);
console.log(result);
// func
var sol = "";
function calc(){
    var number = input.value;
    for(var i=1; i<=number;i++){
        fact=fact*i;
        sol=sol+i+"*";
    }
    console.log(number+"!"+"="+sol+"="+fact);
    result.innerText = "Result:"+fact;
    fact=1;
}

var n = 5;
var too = 1;
for(var i=1;i<=n;i++){
    too = too * 2;
}
// i=1 
console.log(too);
var niilber=0;
for(i=1;i<=n;i++){
    niilber=niilber+i;
}
console.log(niilber);
