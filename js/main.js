const array = ["rock", "paper", "scissors"];
console.log(array.length);

let random = Math.floor(Math.random() * array.length);
console.log(random);

let rock = document.querySelector("#r");
let paper = document.querySelector("#p");
let scissors = document.querySelector("#s");
let user = document.querySelector("#result-user-stat");
let comp = document.querySelector("#result-comp-stat");
let final = document.querySelector("#result-final-stat");
let userScore = document.querySelector("#userScoreVal");
let comScore = document.querySelector("#compScoreVal");

let userCount = 0;
let compCount = 0;

const newArray = [rock, paper, scissors];
newArray.forEach((cur_val, index) => {
  cur_val.addEventListener("click", (e) => {
    let userChoice;
    let compChoice;
    if (e.target.classList.contains("rock")) {
      user.innerHTML = "User:ROCK";
      userChoice = "rock";
    }
    if (e.target.classList.contains("paper")) {
      user.innerHTML = "User:PAPER";
      userChoice = "paper";
    }
    if (e.target.classList.contains("scissors")) {
      user.innerHTML = "User:SCISSORS";
      userChoice = "scissors";
    }

    comp.innerHTML = `Computer:${
      array[Math.floor(Math.random() * array.length)]
    }`;
    compChoice = comp.innerHTML.slice(9);
    console.log(userChoice, compChoice, typeof userChoice, typeof compChoice);
    if (compChoice == userChoice) {
      final.innerHTML = "Winner:Tied";
    }
    if (compChoice == "rock" && userChoice == "scissors") {
      comScore.innerHTML = compCount + 1;
      final.innerHTML = "Winner:Computer";
      compCount++;
    }
    if (compChoice == "scissors" && userChoice == "rock") {
      userScore.innerHTML = userCount + 1;
      final.innerHTML = "Winner:User";
      userCount++;
    }
    if (compChoice == "paper" && userChoice == "rock") {
      comScore.innerHTML = compCount + 1;
      final.innerHTML = "Winner:Computer";
      compCount++;
    }
    if (compChoice == "rock" && userChoice == "paper") {
      userScore.innerHTML = userCount + 1;
      final.innerHTML = "Winner:User";
      userCount++;
    }

    if (compChoice == "scissors" && userChoice == "paper") {
      comScore.innerHTML = compCount + 1;
      final.innerHTML = "Winner:Computer";
      compCount++;
    }
    if (compChoice == "paper" && userChoice == "scissors") {
      userScore.innerHTML = userCount + 1;
      final.innerHTML = "Winner:User";
      userCount++;
    }
  });
});
