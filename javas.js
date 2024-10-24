const container = document.querySelector('#container');


function createRectancleGrid(size){
    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        console.log(`created square number ${i}`);
    }

}

createRectancleGrid(16);