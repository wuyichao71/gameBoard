
const SNAKE_SPEED = 5;

const snakeBody = [
    {x: 11, y: 11},
    {x: 11, y: 10},
    {x: 11, y: 9}    
];

const updateSnake = () => {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    const snakeDirection = getInputDirection();
    snakeBody[0].x += snakeDirection.x;
    snakeBody[0].y += snakeDirection.y;
}

const drawSnake = () => {
    let gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    for (let i = 0; i < snakeBody.length; i++) {
        let snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridColumnStart = snakeBody[i].x;
        snakeElement.style.gridRowStart = snakeBody[i].y;
        gameBoard.appendChild(snakeElement);
    }
}