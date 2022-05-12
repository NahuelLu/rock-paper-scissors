function computerPlay(){
    let randomNumber=Math.random();
    let choiceElement;
    if(randomNumber < 0.3){
        choiceElement="paper";
    }else if(randomNumber >= 0.3 && randomNumber < 0.7){
        choiceElement="rock";
    }else{
        choiceElement="scissor";
    }
    return choiceElement;
}

function playRound(playerSelection,computerPlay){
    let winner;
    let player1= playerSelection.toLowerCase();
    let player2= computerPlay.toLowerCase();
    if(player1 === "paper" && player2 ==="rock" || player1 ==="rock" && player2=== "scissor" || player1 ==="scissor"&& player2=== "paper"){
        winner="player"
        console.log(`Player:You lose! ${playerSelection} beats ${computerPlay}`);
        counterUser++;
    }else if(player2 === "paper" && player1 ==="rock" || player2 ==="rock" && player1=== "scissor" || player2 ==="scissor"&& player1=== "paper"){
        winner="computer";
        console.log(`Computer:You lose! ${computerPlay} beats ${playerSelection}`);
        counterComputer++;
    }else{
        return "Nobody won!";
    }

}
function choiceSelected(){
    userImg.replaceChildren();
    computerImg.replaceChildren();
    let choiceComputer=computerPlay();
    displayChoiceImage(userImg,this.value);
    displayChoiceImage(computerImg,choiceComputer);
    playRound(this.value,choiceComputer);
    updateResults();
}
function updateResults(){
    let currentCounterUser = document.querySelector(".counter-user");
    let currentCounterComputer = document.querySelector(".counter-computer");
    currentCounterUser.textContent=counterUser;
    currentCounterComputer.textContent=counterComputer;
    showWinnerMessage();
}
//there is a problem with this because depends so much with global variables
//And global variables is not recommended to use.Then search later some better way to refactor the code 
function showWinnerMessage(){
    if(counterComputer ===5){
        counterContainer.replaceChildren();
        showWinner.textContent="YOOOO  YOU ARE THER WINNER COMPUTER!!! CONGRATS!!";
        counterContainer.appendChild(showWinner);
    }else if(counterUser===5){
        counterContainer.replaceChildren()
        showWinner.textContent="YOOOO  YOU ARE THER WINNER USER!!! CONGRATS!!";
        counterContainer.appendChild(showWinner);
    }
}
function displayChoiceImage(typeImg,choice){
    let img=document.createElement("img");
    if(choice==="paper"){
        img.src="images/paper.jpg"; 
        typeImg.appendChild(img);
    }else if(choice==="rock"){
        img.src="/images/rock.png";
        typeImg.appendChild(img);
    }else{
        img.src="images/scissor.jpg";
        typeImg.appendChild(img);
    }
}
const button = document.querySelectorAll(".button");
for(let i = 0; i < button.length;i++){
    button[i].addEventListener("click",choiceSelected);
}
const userImg=document.querySelector(".user-img");
const computerImg=document.querySelector(".computer-img");
let counterComputer = 0;
let counterUser =0;
let showWinner = document.createElement("h1");
const counterContainer = document.querySelector(".counter-container");
