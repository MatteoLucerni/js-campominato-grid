console.log('JS OK');

// prendo gli elementi dal DOM

const buttonPlay = document.getElementById('button-play');
const grid = document.getElementById('grid');
const difficulty = document.getElementById('difficulty');

// comparsa della griglia

buttonPlay.addEventListener('click', function(){
    grid.classList.remove('d-none');
});

// parametri per la griglia

const rows = 10;
const cols = 10;
const cellsNumber = rows * cols;
console.log('Max cells: ' + cellsNumber);

// Creo la cella

const createCell = () => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    return cell;
};

// creo il ciclo

for(let i = 0; i < cellsNumber; i++){
    const cell = grid.appendChild(createCell());
    const cellIndex = i + 1;
    cell.innerText = cellIndex;
    cell.addEventListener('click', function(){
        console.log('Cell number: ' + cellIndex);
        cell.classList.toggle('clicked');
    });
}