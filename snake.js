
const SNAKE_SPEED = 4;

let snakeBody = [];
    // {x: 11, y: 11},
    // {x: 11, y: 11 - 1},
    // {x: 11, y: 11 - 2}
// ];

const initialSnake = () => {
    snakeBody = [];
    for (let i = 0; i < 3; i++) {
        snakeBody.push({x: colCenter, y: rowCenter - i});
    }
}

const updateSnake = () => {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i]};
    }

    const snakeDirection = getInputDirection();
    snakeBody[0].x += snakeDirection.x;
    snakeBody[0].y += snakeDirection.y;
}

const drawSnake = () => {
    // let gameBoard = document.getElementById('game-board');
    // gameBoard.innerHTML = '';
    for (let i = 0; i < snakeBody.length; i++) {
        let snakeElement = document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridColumnStart = snakeBody[i].x;
        snakeElement.style.gridRowStart = snakeBody[i].y;
        gameBoard.appendChild(snakeElement);
    }
}

const onSnake = (position, snakeStart = 0) => {
    for (let i = snakeStart; i < snakeBody.length; i++) {
        if (equalPosition(position, snakeBody[i])) {
            return true;
        }
    }
    return false;
}

const increaseSnake = (incr) => {
    for (let i = 0; i < incr; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]});
    }
}

const isSnakeOutOfBound = () => {
    return outOfBound(snakeBody[0]);
}

const isSnakeOnSelf = () => {
    return onSnake(snakeBody[0], 1);
}
