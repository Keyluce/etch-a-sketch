function changeBGColor() {
    let colorRed = Math.floor(Math.random() * 256);
    let colorGreen = Math.floor(Math.random() * 256);
    let colorBlue = Math.floor(Math.random() * 256);
    this.style.filter = `brightness(${brightness}%)`;
    this.style.backgroundColor = `rgb(${colorRed},${colorGreen},${colorBlue})`;
    brightness = brightness - 10;
}
function changeGridSize() {
    let gridSize = prompt("Enter grid size (Just one side) : ");
    if (gridSize > 100) {
        alert("Sorry, that's not possible. Enter a value below 100.");
        return;
    }
    let columnBlock = document.querySelectorAll('.container > div');
    for (const column of columnBlock) {
        container.removeChild(column);
    }
    brightness = 100;
    makeGrid(gridSize);
}
function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        let columnDiv = document.createElement('div');

        columnDiv.style.display = 'flex';
        columnDiv.style.flex = '1';
        container.appendChild(columnDiv);
        for (let j = 0; j < size; j++) {
            let rowDiv = document.createElement('div');
            rowDiv.style.flex = '1'
            columnDiv.appendChild(rowDiv);

            rowDiv.addEventListener('mouseenter', changeBGColor)


        }
    }
}

const container = document.querySelector('.container');
let size = 16;
makeGrid(size);
let brightness = 100;
const button = document.querySelector('button');
button.addEventListener('click', changeGridSize);







