let button = document.getElementById("playButton");
button.addEventListener("click", gridGenerate);
button.addEventListener("click", generateBomb);
let numQuadrati;
let main = document.getElementById("myMain");
let bombArray = [];

function gridGenerate() {
  gameRedFlad = false;
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
      littleSquare.innerHTML = `${i}`;
      bigSquare.append(littleSquare);
      littleSquare.addEventListener("click", gameFunction);
    }
  } else if (difficolta === "media") {
    for (let i = 1; i < 82; i++) {
      main.append(bigSquare);
      let littleSquare = document.createElement("div");
      littleSquare.classList.add("mini-quadrato-9x9");
      littleSquare.innerHTML = `${i}`;
      bigSquare.append(littleSquare);
      littleSquare.addEventListener("click", gameFunction);
    }
  } else {
    for (let i = 1; i < 50; i++) {
      main.append(bigSquare);
      let littleSquare = document.createElement("div");
      littleSquare.classList.add("mini-quadrato-7x7");
      littleSquare.innerHTML = `${i}`;
      bigSquare.append(littleSquare);
      littleSquare.addEventListener("click", gameFunction);
    }
  }
}

let attempts = 0;

function generateBomb() {
  bombArray = [];
  const BOMB_NUMBER = 16;
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

function gameFunction(littleSquare) {
  console.log(littleSquare);

  let selectedNumber = parseInt(this.innerText);
  attempts++;
  console.log(attempts);

  if (bombArray.includes(selectedNumber)) {
    this.style.backgroundColor = "red";
    gameRedFlad = true;
    gameOver();
  } else {
    this.style.backgroundColor = "#6495ed";
    // gameWin;
  }
  this.classList.add("no-pointer");

  console.log(gameRedFlad);
  

}

function gameOver(littleSquare) {
  let loseMessage = document.createElement("div");
  loseMessage.classList.add("provagameover");
  loseMessage.innerHTML = `Hai perso in ${attempts} tentativi`;
  main.append(loseMessage);
  attempts = 0;
}

// function blockGame() {
//   if (gameRedFlad === true) {
//     littleSquare.removeEventListener("click",);
//   } else {
//     console.log("continua a giocare");
//   }
// }

// Utility
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
