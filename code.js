const container = document.querySelector('.container');
for (let i = 0; i < 16; i++)
{
    let columnDiv = document.createElement('div');
    columnDiv.style.height = '6.25%';
    columnDiv.style.display = 'flex';
    container.appendChild(columnDiv);
    columnDiv.style.border = '2px solid black';
    for (let j = 0; j < 16; j++)
    {
        let rowDiv = document.createElement('div');
        rowDiv.style.width = '6.25%';
        columnDiv.appendChild(rowDiv);
        rowDiv.style.border = '2px solid yellow';
    }

}

