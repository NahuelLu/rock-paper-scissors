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
        return winner;
    }else if(player2 === "paper" && player1 ==="rock" || player2 ==="rock" && player1=== "scissor" || player2 ==="scissor"&& player1=== "paper"){
        winner="computer";
        console.log(`Computer:You lose! ${computerPlay} beats ${playerSelection}`);
        return winner;
    }else{
        return "Nobody won!";
    }

}
let button = document.querySelectorAll(".button");
for(let i = 0; i < button.length;i++){
    button[i].addEventListener("click",choiceSelected);
}
function choiceSelected(){
    userImg.replaceChildren();
    computerImg.replaceChildren();
    let choiceComputer=computerPlay();
    displayChoiceImage(userImg,this.value);
    displayChoiceImage(computerImg,choiceComputer);
    playRound(this.value,choiceComputer);
}
const userImg=document.querySelector(".user-img");
const computerImg=document.querySelector(".computer-img");
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