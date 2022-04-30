function computerPlay(){
    let randomNumber=Math.random();
    let choiceElement;
    if(randomNumber < 0.3){
        choiceElement="Paper";
    }else if(randomNumber >= 0.3 && randomNumber < 0.7){
        choiceElement="Rock";
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
game();
function game(){
    let counterPlayer=0;
    let counterComputer=0;
    let winnerRound;
    for(let i =0; i<5;i++){
        let playerSelection = prompt("Pick one:");
        let computerSelection = computerPlay();
        winnerRound=playRound(playerSelection,computerSelection);
        if(winnerRound==="player"){
            counterPlayer++;
            console.log(`Player:${counterPlayer}`);
            console.log(`Computer:${counterComputer}`);
        }else if(winnerRound==="computer"){
            counterComputer++;
            console.log(`Player:${counterPlayer}`);
            console.log(`Computer:${counterComputer}`);
        }else{
            console.log("That round was equal then nobody won point");
        }
    }
    if(counterPlayer>counterComputer){
        console.log(`Winner:Player with ${counterPlayer}`);
        console.log(`Loser:Computer with ${counterComputer}`);
    }else{
        console.log(`Winner:Player with ${counterComputer}`);
        console.log(`Loser:Computer with ${counterPlayer}`);
    }
}