function changeBGColor() {
    this.style.backgroundColor = 'orange';
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

const button = document.querySelector('button');
button.addEventListener('click', changeGridSize);







