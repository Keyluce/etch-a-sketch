const container = document.querySelector('.container');
for (let i = 0; i < 16; i++)
{
    let columnDiv = document.createElement('div');

    columnDiv.style.display = 'flex';
    columnDiv.style.flex = '1';
    container.appendChild(columnDiv);
    for (let j = 0; j < 16; j++)
    {
        let rowDiv = document.createElement('div');
        rowDiv.style.flex = '1'
        columnDiv.appendChild(rowDiv);
        rowDiv.style.border = '2px solid black';
        rowDiv.addEventListener('mouseenter', changeBGColor)
    }

}

const button = document.querySelector('button');
button.addEventListener('click', changeGridSize);

function changeBGColor(e)
{
   this.style.backgroundColor = 'orange';
}

function changeGridSize(e)
{
    let gridSize = prompt("Enter grid size (Just one side) : ");
    
}