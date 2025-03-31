const btns = document.querySelectorAll("button")
const resultEle = document.getElementById("result")
const userScoreEle = document.getElementById("user-score")
const compScoreEle = document.getElementById("comp-score")

let userScore = 0
let compScore = 0


btns.forEach(btn=>{
btn.addEventListener("click", () => {
   const result = playRound(btn.id,compChoice());
   resultEle.textContent = result;
    
    });
   
    });

    function compChoice()
     {
        const choices = ["Rock","Paper","Scissor"];
        const randomChoice = Math.floor(Math.random() *choices.length);
        return choices[randomChoice];
     }

     function playRound(userSelection,compSelection)
     {
        if(userSelection === compSelection)
     {
        return "Its a tie!";
        
     }
     else if(
        (userSelection==="Rock" && compSelection==="Scissor")||
        (userSelection==="Paper" && compSelection==="Paper")||
        (userSelection==="Scissor" && compSelection==="Rock")
     ){
        userScore++
        userScoreEle.textContent = userScore;
        return`You Won! ${userSelection} beats ${compSelection}`;
     }
     else{
        compScoreEle.textContent = compScore
        compScore++
        return`You lose! ${compSelection} beats ${userSelection}`;
     }
     }