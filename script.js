let container = document.querySelector(".container");
let gridButton = document.querySelector(".gridButton");
let mouseDown = 0
container.onmousedown = () => {
    mouseDown = 1;
}

container.onmouseup = () => {
    mouseDown = 0;
}

gridButton.addEventListener("click", () => {
    let pickedNumber = ((window.prompt("Pick a number of squares per side no bigger than 100.")));
    if ((pickedNumber > 100) | (pickedNumber <= 0) | (isNaN(pickedNumber) == true)) {
        alert("That is not a valid number.");
    } else {
        generateGrid(pickedNumber);
    }
});

function generateSquare(totalSquares) {
    let square = document.createElement("div");
    square.classList.add("square");
    squareLength = (600 / Math.sqrt(totalSquares)) - 2;
    square.style.height = `${squareLength}px`;
    square.style.width = `${squareLength}px`;
    square.style.margin = "-1";
    square.addEventListener("mouseover", () => {
        if (mouseDown == 1) {
            square.classList.add("painted");
    }});
    container.appendChild(square); 
}

function generateGrid(pickedNumber) {
    container.replaceChildren();
    totalSquares = (parseInt(pickedNumber)*parseInt(pickedNumber))
    for (i=1; i <= totalSquares; i++) {
        generateSquare(totalSquares)
}};