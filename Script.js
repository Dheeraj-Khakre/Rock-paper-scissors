let userscore = 0;
let compscore = 0;

let us = document.querySelector("#user-score");
let cs = document.querySelector("#com-score");
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const getCompChoice = () => {
    let compChoiceArr = ["rock", "paper", "scissors"];

    let idx = Math.floor(Math.random() * 3);

    return compChoiceArr[idx];

}
const drawgame = () => {
    // console.log("game was draw");
    msg.innerText = "Game Was Deaw play again!";
    msg.style.backgroundColor = " #081b31";
}

const showwinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        userscore++;
        us.innerText = userscore;
        // console.log("you won");
        msg.innerText = `You win! your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";

    } else {
        compscore++;
        cs.innerText = compscore;
        // console.log("you lose");
        msg.innerText = `You lose ! ${compChoice} beat your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playgame = (userchoice, compChoice) => {
    // console.log(" user choice was clicked ",userchoice);
    //   console.log(" computer choice was clicked ",compChoice);


    if (userchoice === compChoice) {

        // game draw;
        drawgame();
    } else {

        let userwin = true;
        if (userchoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;

        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compChoice);

    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {


        let userchoice = choice.getAttribute("id");
        //   console.log("choice was clicked ",choiceid);
        playgame(userchoice, getCompChoice());


    });




});