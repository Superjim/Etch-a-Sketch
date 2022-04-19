let colour = "black";
let click = "true";

const customColour = document.getElementById('customColour')
customColour.onchange = (e) => setColour(e.target.value)

function createBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll(".div");
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colourSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}


createBoard(20);

function changeBoardSize(size) {
    createBoard(size);
}

function colourSquare() {
    if (click) {
        if (colour === "random") {
            this.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        } else {
        this.style.backgroundColor = colour;
        }
    }
}

function setColour(input) {
    colour = input;
}


function clearBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
  }

  document.querySelector("body").addEventListener("click", (e) => {
      if((e.target.tagName != "BUTTON") && 
         (e.target.tagName != "INPUT")) {
        click = !click;
        if(click) {
            document.querySelector(".colouring").textContent = "You are Colouring";
        } else {
          document.querySelector(".colouring").textContent = "You are NOT Colouring";
      }

    }
  });


