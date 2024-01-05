"use strict";

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 20;

document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  if (!guess) {
    document.querySelector(".message").textContent = "Please enter a number!";
  } else if (number == guess) {
    document.querySelector(".message").textContent = "Yay number matched!🎉";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (highscore > score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  if (score > 0) {
    if (guess > number) {
      document.querySelector(".message").textContent = "Your guess is high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < number) {
      document.querySelector(".message").textContent = "Your guess is loww!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "You lost!!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").textContent = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
