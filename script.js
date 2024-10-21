let result = document.getElementById("result").innerHTML;
let user_score = 0;
let comp_score = 0;
let roun_data = prompt("tell us how many rounds you want to play", " ");
function getinput() {
  if (roun_data >= 1) {
    document.getElementById("Round").innerHTML = roun_data;
  } else if (isNaN(roun_data)) {
    //    alert("enter numbers only.")
    document.getElementById("error").innerHTML = "Please enter numbers only.";
    error.style.color = "red";
  }
}
getinput();
function playGame(userChoice) {

    for (i = 0; i < roun_data; i++) {
      const computerChoice = getComputerChoice();
      determineWinner(userChoice, computerChoice);
      console.log(roun_data);
      roun_data--;
      break;
    
  }  if (roun_data === 0) {
    alert("Rounds Completed");

    scores(user_score, comp_score);
  }
}
function reset() {
  document.getElementById("Round").innerHTML = "";
  user_score = 0;
  comp_score = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("point").innerHTML = "";
  document.getElementById("score").innerHTML = "";
}
function playAgain() {
  reset();
  user_score = 0;
  comp_score = 0;
  roun_data = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("point").innerHTML = "";
  document.getElementById("score").innerHTML = "";
  roun_data = prompt("tell us how many rounds you want to play", " ");
  getinput();
}
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function determineWinner(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `You choose ${userChoice} and Computer choose ${computerChoice}, Rock beats scissors`;
    if (userChoice === "rock") {
      user_score++;
      document.getElementById("point").innerHTML = `You got 1 point`;
    } else if (computerChoice === "rock") {
      comp_score++;
      document.getElementById("point").innerHTML = `Computer got 1 point`;
    }
  } else if (
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors")
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `You choose ${userChoice} and Computer choose ${computerChoice}, Scissors beats paper`;
    if (userChoice === "scissors") {
      user_score++;
      document.getElementById("point").innerHTML = `You got 1 point`;
    } else if (computerChoice === "scissors") {
      comp_score++;
      document.getElementById("point").innerHTML = `Computer got 1 point`;
    }
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `You choose ${userChoice} and Computer choose ${computerChoice}, Paper beats rocks`;
    if (userChoice === "paper") {
      user_score++;
      document.getElementById("point").innerHTML = `You got 1 point`;
    } else if (computerChoice === "paper") {
      comp_score++;
      document.getElementById("point").innerHTML = `Computer got 1 point`;
    }
  } else if (
    (userChoice === "rock" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "paper") ||
    (userChoice === "scissors" && computerChoice === "scissors")
  ) {
    document.getElementById(
      "result"
    ).innerHTML = `You choose ${userChoice} and Computer choose ${computerChoice}, Game ties.`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Didn't choose the right option.`;
  }
}
function scores(user_score, comp_score) {
  if (user_score > comp_score) {
    document.getElementById(
      "score"
    ).innerHTML = ` You win with  ${user_score} scores.`;
  } else if (comp_score > user_score) {
    document.getElementById(
      "score"
    ).innerHTML = `Computer win with ${comp_score} scores.`;
  } else if (user_score === comp_score) {
    document.getElementById(
      "score"
    ).innerHTML = `Tie with ${comp_score} scores.`;
  }
}
