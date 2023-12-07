// for loop
// for(var i=1;i<=5;i++){
//     console.log("for:"+i);
// }
// while loop
// var a=1;
// while(a<=5){
//     console.log("while:"+a);
//     a++;
// }
// do while 
// var k=1;
// do{
//     console.log("do while:"+k);
//     k++;
// }while(k<=5);

// nested loop -> davhar davtalt
// for(var i=1; i<=5; i++){
//     console.log('i:'+i);
//     for(var j=1; j<=5; j++){
//         console.log("j:"+j);
//     }
// }
// 1-10 hurtleh bvh hurdiig hevlene uu 
// 1x1=1
// 10x10=100
// for(var i=1; i<=10;i++){
//     console.log("urjver:"+i)
//     for(var j=1;j<=10;j++){
//         urjver=i*j;
//         console.log(i + "*" + j +"="+urjver)
//     }
// }
// *
// **
// ***
// ****
// *****
// for(var i=1;i<=5;i++){
//     var space = "";
//     for(var j=1; j<=i;j++){
//         space = space + j;
//     }
//     console.log(space);
// }
// i=1 -> 1<=5 -> true -> j=1 1<=1 true ->  *
// i=2 -> 2<=5 -> true -> j=1 1<=2 true ->  *
//                        j=2 2<=2 true ->  **

// 1
// 12
// 123
// 1234
// 12345

// *****
// ****
// ***
// **
// *
// for(var i=5;i>=1;i--){
//     var star = "";
//     for(var j=1;j<=i;j++){
//         star=star+"*";
//     }
//     console.log(star);
// }
// 1
// 22
// 333
// 4444
// 55555 

// 12345
// 1234
// 123
// 12
// 1
// define 
var randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);
alert("Ta 1-ees 10 hurtleh random toog taana uu");
var chance =3;
for(var i=1; i<=chance;i++){
    var myNumber = +prompt("1-10 hurtelh too oruulna uu");
    if(randomNumber==myNumber){
        alert(i+" udaagaar ta hojloo");
        break;
    }else if(myNumber=="" || myNumber<1 || myNumber>10){
        alert("Buruu utga oruullaa");
    }else if(myNumber<randomNumber){
        alert("Baga bna");
    }else if(myNumber>randomNumber){
        alert("ih bna");
    }else{
        alert("Dahin oroldono uu");
    }
    if(i>chance){
        alert("Ta hojigdloo");
    }
}
// 1. Hooson utga, 1-ees baga 10-aas ih utga oruulbal buruu utga
// 2. hint ugdug bolgoh buyu taaj baigaa toonoos ih too oruulval ih bna, baga oruulval baga baina gej hint uguh
// 3. Heddeh udaagiin oroldlogoor yalj baigaag gargaj ireh
// 4. Hojigdloo gej gargaj ireh