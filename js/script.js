console.log('JS OK');

// prendo gli elementi dal DOM

const buttonPlay = document.getElementById('button-play');
const grid = document.getElementById('grid');
const difficulty = document.getElementById('difficulty');

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

// genero un numero casuale

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

// creo il ciclo

for(let i = 0; i < cellsNumber; i++){
    const cell = grid.appendChild(createCell());
    cell.innerText = i + 1;
    cell.addEventListener('click', function(){
        cell.classList.toggle('clicked');
    });
}