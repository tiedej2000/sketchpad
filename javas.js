const container = document.querySelector('#container');
const clearButton  = document.querySelector('.clear')
const gridSizeButton = document.querySelector('.grid-size')


function createRectancleGrid(){

    container.innerHTML=''

    const size = gridSize()
    const squareSize = 640/ size
    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`

        square.addEventListener('mouseover',()=> {
            square.style.backgroundColor = colorSquare()
        })


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

gridSizeButton.addEventListener('click', () => {
    createRectancleGrid();
});

createRectancleGrid()
