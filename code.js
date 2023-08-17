const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.height = '100%';
const html = document.querySelector('html');
html.style.height = '100%';
const body = document.querySelector('body');
body.style.height = '100%';
container.style.border = '2px solid red';


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