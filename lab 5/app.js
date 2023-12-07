// define
var player = document.querySelector('.player');
var computer = document.querySelector('.computer');
var winner = document.querySelector('.winner');
var random;
var computerChoice;
var pPoint=0, cpoint=0;
var yourPoint = document.querySelector('.yourPoint');
var computerPoint = document.querySelector(".computerPoint");
// check
console.log(player);
console.log(computer);
console.log(winner);
// uildel
function play(playerChoice){
    if(playerChoice=="paper"){
        player.innerText = "Your choice : Paper";
    }else if(playerChoice=="scissors"){
        player.innerText = "Your choice : Scissors";
    }else if(playerChoice=="rock"){
        player.innerText = "Your choice : Rock";
    }
    // computer choice -> random() --> 0->paper, 1->scissors, 2->rock
    random = Math.floor(Math.random()*3);
    console.log(random);
    if(random==0){
        computerChoice="paper";
        computer.innerText = "Computer choice : Paper";
    }else if(random==1){
        computerChoice="scissors";
        computer.innerText = "Computer choice : Scissors";
    }else if(random==2){
        computerChoice="rock";
        computer.innerText = "Computer choice : rock";
    }
    // winner -> playerchoice==paper computerChoice==rock
    // rock : scissors , scissors:paper
    if((playerChoice=="paper" && computerChoice=="rock") || (playerChoice=="scissors" && computerChoice=="paper") ||
    (playerChoice=="rock" && computerChoice=="scissors")){
        winner.innerText ="Player wins!";
        pPoint++;
        yourPoint.innerText = "You: " + pPoint;
    }else if((playerChoice=="paper" && computerChoice=="scissors") || (playerChoice=="scissors" && computerChoice=="rock") ||
    (playerChoice=="rock" && computerChoice=="paper")){
        winner.innerText ="Computer wins!";
        cpoint++;
        computerPoint.innerText = "Computer: " + cpoint;
    }else{
        winner.innerText ="Tentssen";
    }
    // 1. Оноо тоолно
    // 2. Шинээр эхлэх товч гаргаж ирэх
}
function restart(){
    pPoint=0;
    cpoint=0;
    player.innerText = "Your choice: ";
    computer.innerText = "Computer choice: ";
    winner.innerText = "Result: ";
    yourPoint.innerText = "You: " + pPoint;
    computerPoint.innerText = "You: " + cpoint;
}