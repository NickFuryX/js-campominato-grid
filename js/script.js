let button = document.getElementById("playButton");
let difficolta = document.getElementById("difficolta").value;

button.addEventListener("click", gridGenerate);

function gridGenerate() {
    console.log(difficolta)
  let main = document.getElementById("myMain");
  let bigSquare = document.createElement("div");
  bigSquare.classList.add("quadrato");
  main.append(bigSquare);

  if (difficolta === "facile") {
    for (let i = 1; i < 101; i++) {
      let littleSquare = document.createElement("div");
      littleSquare.classList.add("mini-quadrato");
      littleSquare.innerHTML = `${i}`
      bigSquare.append(littleSquare);
    }
  } else if (difficolta === "media"){
    console.log('medio')


  } else{
    console.log('difficile')

  }
}