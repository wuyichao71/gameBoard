const SNAKE_SPEED = 2;

const snake = [
    {x: 11, y: 11},
    {x: 11, y: 10},
    {x: 11, y: 9}    
];

const snake_update = () => {
    for (let i = snake.length - 2; i >= 0; i--) {
        snake[i + 1] = {...snake[i]};
    }
    snake[0].x += 0;
    snake[0].y += 1;
}

const snake_draw = () => {
    let gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    for (let i = 0; i < snake.length; i++) {
        let snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridColumnStart = snake[i].x;
        snakeElement.style.gridRowStart = snake[i].y;
        gameBoard.appendChild(snakeElement);
    }
}