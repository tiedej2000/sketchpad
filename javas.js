const container = document.querySelector('#container');
const clearButton  = document.querySelector('.clear')
const gridSizeButton = document.querySelector('.grid-size')
const colorbtn = document.querySelector('.color');
let counter = 0;

function createRectancleGrid(){
    
    container.innerHTML=''

    const size = gridSize()
    const squareSize = 640/ size
    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`

        square.addEventListener('mouseover', () => {
            switch (counter % 4) {
                case 1:
                    square.style.backgroundColor = 'red';
                    break;
                case 2:
                    square.style.backgroundColor = 'blue';
                    break;
                case 3:
                    square.style.backgroundColor = 'green';
                    break;
                default:
                    square.style.backgroundColor = colorSquare(); // Random color
            }
        });

        container.appendChild(square);
        
    }

}

const clearSquareColor = () =>{
    const squares = document.querySelectorAll('.square')
    squares.forEach(square =>{
        square.style.backgroundColor = ''
    })
}

clearButton.addEventListener('click',clearSquareColor)


const colorSquare = () => {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`;
}

const gridSize = () =>{
    let size
    do{
        size = parseInt(prompt("Enter a grid size between 8 and 100!"))
        if(isNaN(size) || size < 8 || size > 100){
            alert("Please enter a valid number between 8 and 100")
        }
    }while(isNaN(size) || size < 8 || size > 100)

    return size;
    
}

const changeColor = () => {
    counter++;

    switch (counter % 4) {
        case 1:
            colorbtn.textContent = 'RED'
            break;
        case 2:
            colorbtn.textContent = 'BLUE'
            break;
        case 3:
            colorbtn.textContent = 'GREEN'
            break;
        default:
            colorbtn.textContent = 'RANDOM'
    }
    console.log(counter)
}

colorbtn.addEventListener('click',changeColor)

gridSizeButton.addEventListener('click', () => {
    createRectancleGrid();
});

createRectancleGrid()
