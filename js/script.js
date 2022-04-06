let button = document.getElementById("playButton");
button.addEventListener("click", gridGenerate);
button.addEventListener("click", generateBomb);
let numQuadrati;
let main = document.getElementById("myMain");
let bombArray = [];

function gridGenerate() {
  let difficolta = document.getElementById("difficolta").value;
  main.innerHTML = ""; //(serve a pulire l'html)
  generateBomb;
  let bigSquare = document.createElement("div");
  bigSquare.classList.add("quadrato");

  if (difficolta === "facile") {
    for (let i = 1; i < 101; i++) {
      main.append(bigSquare);
      let littleSquare = document.createElement("div");
      littleSquare.classList.add("mini-quadrato-10x10");
      littleSquare.classList.add("mini-quadrato");
      littleSquare.innerHTML = `${i}`;
      bigSquare.append(littleSquare);
      littleSquare.addEventListener("click", gameFunction);
    }
  } else if (difficolta === "media") {
    for (let i = 1; i < 82; i++) {
      main.append(bigSquare);
      let littleSquare = document.createElement("div");
      littleSquare.classList.add("mini-quadrato-9x9");
      littleSquare.classList.add("mini-quadrato");
      littleSquare.innerHTML = `${i}`;
      bigSquare.append(littleSquare);
      littleSquare.addEventListener("click", gameFunction);
    }
  } else {
    for (let i = 1; i < 50; i++) {
      main.append(bigSquare);
      let littleSquare = document.createElement("div");
      littleSquare.classList.add("mini-quadrato-7x7");
      littleSquare.classList.add("mini-quadrato");
      littleSquare.innerHTML = `${i}`;
      bigSquare.append(littleSquare);
      littleSquare.addEventListener("click", gameFunction);
    }
  }
}

let attempts = 0;

function generateBomb() {
  bombArray = [];
  const BOMB_NUMBER = 1;
  let max_attempt = 0;
  let difficolta = document.getElementById("difficolta").value;
  if (difficolta === "facile") {
    numQuadrati = 100;
  } else if (difficolta === "media") {
    numQuadrati = 81;
  } else {
    numQuadrati = 49;
  }
  max_attempt = numQuadrati - BOMB_NUMBER;
  while (bombArray.length < BOMB_NUMBER) {
    let bombNUmber = getRandomInt(1, numQuadrati);
    if (!bombArray.includes(bombNUmber)) {
      bombArray.push(bombNUmber);
    }
  }
  console.log(bombArray);
}

function gameFunction() {
  let selectedNumber = parseInt(this.innerText);
  attempts++;
  if (bombArray.includes(selectedNumber)) {
    this.style.backgroundImage = "url(../img/bomb.jpg)";
    this.innerText = "";
    gameOver();
  } else {
    this.style.backgroundColor = "#6495ed";
    console.log(attempts)
    if (attempts === numQuadrati - 1) {
      gameWin();
    }
  }
  this.removeEventListener("click", gameFunction);
  this.classList.add("no-pointer");
}

function gameOver() {
  let loseMessage = document.createElement("div");
  loseMessage.innerHTML = `Hai perso in ${attempts} tentativi. Premi play per rigiocare.`;
  main.append(loseMessage);
  attempts = 0;
  let allCells = document.getElementsByClassName("mini-quadrato");
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].removeEventListener("click", gameFunction);
    allCells[i].classList.add("no-pointer");
  }
}

function gameWin() {
  let winMessage = document.createElement("div");
  winMessage.innerHTML = `Hai vinto. Premi play per rigiocare.`;
  main.append(winMessage);
  attempts = 0;
  let allCells = document.getElementsByClassName("mini-quadrato");
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].removeEventListener("click", gameFunction);
    allCells[i].classList.add("no-pointer");
  }
}

// Utility
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
