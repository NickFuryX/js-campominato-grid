let button = document.getElementById("playButton");
button.addEventListener("click", gridGenerate);

function gridGenerate() {
  let difficolta = document.getElementById("difficolta").value;
  let main = document.getElementById("myMain");
  main.innerHTML = ""; //(serve a pulire l'html)

  let bigSquare = document.createElement("div");
  bigSquare.classList.add("quadrato");

  if (difficolta === "facile") {
    for (let i = 1; i < 101; i++) {
      main.appendChild(bigSquare);
      let littleSquare = document.createElement("div");
      littleSquare.classList.add("mini-quadrato-10x10");
      littleSquare.innerHTML = `${i}`;
      bigSquare.append(littleSquare);
    }
  } else if (difficolta === "media") {
    for (let i = 1; i < 82; i++) {
      main.append(bigSquare);
      let littleSquare = document.createElement("div");
      littleSquare.classList.add("mini-quadrato-9x9");
      littleSquare.innerHTML = `${i}`;
      bigSquare.append(littleSquare);
    }
  } else {
    for (let i = 1; i < 50; i++) {
      main.append(bigSquare);
      let littleSquare = document.createElement("div");
      littleSquare.classList.add("mini-quadrato-7x7");
      littleSquare.innerHTML = `${i}`;
      bigSquare.append(littleSquare);
    }
  }
}
